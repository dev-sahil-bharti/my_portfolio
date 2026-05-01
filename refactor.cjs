const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');

// 1. Create Directories
const dirsToCreate = [
    path.join(componentsDir, 'sections'),
    path.join(componentsDir, 'common'),
    path.join(srcDir, 'lib'),
    path.join(srcDir, 'pages'),
    path.join(srcDir, 'styles'),
    path.join(srcDir, 'assets', 'images')
];

dirsToCreate.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// 2. Move & Rename Files
const moves = [
    // Sections
    { from: path.join(componentsDir, 'BackgroundBeamsDemo.jsx'), to: path.join(componentsDir, 'sections', 'HeroSection.jsx') },
    { from: path.join(componentsDir, 'LampDemo.jsx'), to: path.join(componentsDir, 'sections', 'AboutSection.jsx') },
    { from: path.join(componentsDir, 'StickyScrollRevealDemo.jsx'), to: path.join(componentsDir, 'sections', 'ProjectsSection.jsx') },
    { from: path.join(componentsDir, 'WorkSection.jsx'), to: path.join(componentsDir, 'sections', 'WorkSection.jsx') },
    { from: path.join(componentsDir, 'InfiniteMovingCardsDemo.jsx'), to: path.join(componentsDir, 'sections', 'SkillsSection.jsx') },
    { from: path.join(componentsDir, 'SocialSection.jsx'), to: path.join(componentsDir, 'sections', 'ContactSection.jsx') },
    // Unused or extra root components (moving to sections just in case)
    { from: path.join(componentsDir, 'ProjectSection.jsx'), to: path.join(componentsDir, 'sections', 'ProjectSection_Old.jsx') },
    { from: path.join(componentsDir, 'HeroContent.jsx'), to: path.join(componentsDir, 'sections', 'HeroContent_Old.jsx') },
    
    // Common
    { from: path.join(componentsDir, 'Extra', 'Header.jsx'), to: path.join(componentsDir, 'common', 'Header.jsx') },
    { from: path.join(componentsDir, 'Extra', 'HeroBackground.jsx'), to: path.join(componentsDir, 'common', 'HeroBackground.jsx') },
    { from: path.join(componentsDir, 'Extra', 'ProjectCard.jsx'), to: path.join(componentsDir, 'common', 'ProjectCard.jsx') },

    // Utils
    { from: path.join(componentsDir, 'ui', 'cn.ts'), to: path.join(srcDir, 'lib', 'utils.ts') },

    // Styles
    { from: path.join(srcDir, 'index.css'), to: path.join(srcDir, 'styles', 'globals.css') },
];

moves.forEach(move => {
    if (fs.existsSync(move.from)) {
        fs.renameSync(move.from, move.to);
    }
});

// 3. Update Imports globally
function replaceInFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    for (const [regex, replacement] of replacements) {
        content = content.replace(regex, replacement);
    }
    if (content !== original) {
        fs.writeFileSync(filePath, content);
    }
}

function traverseAndReplace(dir, replacements) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseAndReplace(fullPath, replacements);
        } else if (fullPath.match(/\.(js|jsx|ts|tsx)$/)) {
            replaceInFile(fullPath, replacements);
        }
    }
}

const globalReplacements = [
    // cn.ts imports
    [/from\s+['"]\.\.\/\.\.\/ui\/cn['"]/g, 'from "../../lib/utils"'],
    [/from\s+['"]\.\/cn['"]/g, 'from "../../lib/utils"'],
    [/from\s+['"]\.\.\/ui\/cn['"]/g, 'from "../../lib/utils"'],
    
    // CSS import in main.jsx
    [/import\s+['"]\.\/index\.css['"]/g, 'import "./styles/globals.css"'],
];

traverseAndReplace(srcDir, globalReplacements);

// Fix UI component specific cn paths manually since the above regex might miss some or over-replace
const uiDir = path.join(componentsDir, 'ui');
const uiFiles = fs.readdirSync(uiDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
uiFiles.forEach(file => {
    let p = path.join(uiDir, file);
    replaceInFile(p, [
        [/from\s+['"]\.\/cn['"]/g, 'from "../../lib/utils"'],
        [/from\s+['"]\.\.\/ui\/cn['"]/g, 'from "../../lib/utils"'],
        [/from\s+['"]\.\.\/\.\.\/ui\/cn['"]/g, 'from "../../lib/utils"']
    ]);
});

// Update Demo files which are now in `sections` so their UI imports point up one level correctly
const sectionsDir = path.join(componentsDir, 'sections');
const sectionFiles = fs.existsSync(sectionsDir) ? fs.readdirSync(sectionsDir).filter(f => f.endsWith('.jsx')) : [];
sectionFiles.forEach(file => {
    let p = path.join(sectionsDir, file);
    replaceInFile(p, [
        [/from\s+['"]\.\/ui\//g, 'from "../ui/']
    ]);
});

// Update Home.jsx and App.jsx
const homeContent = `import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import WorkSection from '../components/sections/WorkSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import ContactSection from '../components/sections/ContactSection'
import { SkillsSection } from '../components/sections/SkillsSection'

export function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}`;
fs.writeFileSync(path.join(srcDir, 'pages', 'Home.jsx'), homeContent);

const appContent = `import { Home } from './pages/Home';

export default function App() {
  return <Home />;
}`;
fs.writeFileSync(path.join(srcDir, 'App.jsx'), appContent);

// Fix component names in the section files
replaceInFile(path.join(sectionsDir, 'HeroSection.jsx'), [[/BackgroundBeamsDemo/g, 'HeroSection']]);
replaceInFile(path.join(sectionsDir, 'AboutSection.jsx'), [[/LampDemo/g, 'AboutSection']]);
replaceInFile(path.join(sectionsDir, 'ProjectsSection.jsx'), [[/StickyScrollRevealDemo/g, 'ProjectsSection']]);
replaceInFile(path.join(sectionsDir, 'SkillsSection.jsx'), [[/InfiniteMovingCardsDemo/g, 'SkillsSection']]);

console.log("Refactor complete.");
