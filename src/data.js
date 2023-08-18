// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import viaspLogo from "./images/repository-open-graph-template.jpg";
import skypewLogo from "./images/skypewaddle.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "stephanzwicknagl";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a recent graduate of Computational Science at the University of Potsdam, now based in the States. I specialize in Dashboard Creation an my thesis is about AI Explainability.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="teenyicons:python-outline" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 3,
    skill: <Icon icon="simple-icons:googlecloud" className="display-4" />,
    name: "Google Cloud",
  },
  {
    id: 5,
    skill: <Icon icon="simple-icons:flask" className="display-4" />,
    name: "Flask",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="carbon:sql" className="display-4" />,
    name: "SQL",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 7,
    skill: <Icon icon="devicon-plain:keras" className="display-4" />,
    name: "Keras",
  },
  {
    id: 9,
    skill: <Icon icon="simple-icons:tensorflow" className="display-4" />,
    name: "Tensorflow",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["viasp"];
export const filteredProjects2 = ["skypewaddle"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "viasp",
    image: viaspLogo
  },
  {
    name: "skypewaddle",
    image: skypewLogo
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xleyjvvl";
