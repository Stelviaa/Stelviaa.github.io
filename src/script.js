const translations = {
    fr: {
        profession: "Fullstack Développeur Junior",
        headerPresentation: "Passionné par l’informatique depuis tout petit, je me suis naturellement tourné vers le développement. En intégrant l’école 42, j’ai pu approfondir mes connaissances à travers divers projets. Je suis maintenant prêt à les investir dans le monde actif.",
        cardFormationTitle: "Formations",
        cardFormationSchool1: "Lycée Clément Marot | Cahors",
        cardFormationSchool2: "École 42 | Nice",
        cardFormationDiploma1: "Baccalauréat Sciences Économiques et Sociales, Numérique et Sciences Informatiques",
        cardFormationDiploma2: "Architecte en Technologies du Numérique",
        cardFormationDate1: "2022 - actuellement",
        cardSkillTitle: "Compétences",
        cardSkillSubtitle1: "Informatique",
        cardSkillSubtitle2: "Linguistique",
        cardSkillLi1: "Francais (natif)",
        cardSkillLi2: "Anglais (B1-)",
        cardAboutTitle: "À propos de moi",
        cardAboutSubtitle1: "Qualité",
        cardAboutSubtitle2: "Hobbies",
        cardAboutSubtitle3: "Réseaux",
        cardAboutLi1: "Motivé",
        cardAboutLi2: "Sociable",
        cardAboutLi3: "Rigoureux",
        cardAboutLi4: "Autonome",
        cardAboutLi5: "Parapente",
        cardAboutLi6: "Cuisine",
        sectionProjectsTitle: "Mes projets",
        projectsCard1Title: "Minishell",
        projectsCard1Description: "Reproduction d'un terminal bash, incluant redirections, pipes, built-ins, exécution de binaire, et signaux.",
        projectsCard2Title: "Ft_irc",
        projectsCard2Description: "Reproduction d'un serveur irc. Où les operations entrées/sorties doivent être non bloquantes.",
        projectsCard3Title: "Inception",
        projectsCard3Description: "Initiation à docker, et docker-compose. Le but était de faire marcher trois containeurs ensembles, nginx, mariaDB, wordpress.",
        projectsCard4Title: "Transcendence",
        projectsCard4Description: "Création d'un site internet, en application monopage. Multijoueur en temps réel, chat, database, et gestion d'utilisateurs.",

    },
    en: {
        profession: "Fullstack Developer Junior",
        headerPresentation: "Passionate about computers since I was a kid, I naturally turned to development. Joining 42 school, i was able to deepen my knowledge throught various projects. I’m now ready to invest my knowledge in the working world.",
        cardFormationTitle: "Educations",
        cardFormationSchool1: "High school Clément Marot | Cahors",
        cardFormationSchool2: "School 42 | Nice",
        cardFormationDiploma1: "Economics and social sciences, digital and computer sciences (DEC)",
        cardFormationDiploma2: "Digital Technology Architect (in progress)",
        cardFormationDate1: "2022 - currently",
        cardSkillTitle: "Skills",
        cardSkillSubtitle1: "IT",
        cardSkillSubtitle2: "Languages",
        cardSkillLi1: "French (native)",
        cardSkillLi2: "English (B1-)",
        cardAboutTitle: "About me",
        cardAboutSubtitle1: "Quality",
        cardAboutSubtitle2: "Hobbies",
        cardAboutSubtitle3: "Social Network",
        cardAboutLi1: "Motivate",
        cardAboutLi2: "Sociable",
        cardAboutLi3: "Standalone",
        cardAboutLi4: "Rigorous",
        cardAboutLi5: "Paragliding",
        cardAboutLi6: "Cooking",
        sectionProjectsTitle: "My projects",
        projectsCard1Title: "Minishell",
        projectsCard1Description: "Reproduction of an bash terminal. We had to implement commands executions, pipes, signals, redirections, and our own commands.",
        projectsCard2Title: "Ft_irc",
        projectsCard2Description: "Reproduction of an irc server with a bot. Where the input/output must be non-blocking.",
        projectsCard3Title: "Inception",
        projectsCard3Description: "Project to learn Docker. My goal was to make communicate the following containers: Nginx, Wordpress, and Mariadb with my own images.",
        projectsCard4Title: "Transcendence",
        projectsCard4Description: "Creating a website, in single-page-application. It must offer a tounament, a matchmaking system, a user experience and a chat.",
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setLanguage('fr');
});

function myStopPropagation(event){
    event.stopPropagation();
}

function setLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[lang][key];
    });
}

var projectsCards = [0, 0, 0, 0];


function launchAnimation(event, element){
    if (element.querySelector(".front__card").style.display == "none"){
        element.style.animation="recto-card 1s forwards";
        setTimeout(function(){
            element.querySelector(".front__card").style.display = "block";
            element.querySelector(".back__card").style.display = "none";
        }, 300);
    }
    else{
        element.style.animation="verso-card 1s forwards";
        setTimeout(function(){
            element.querySelector(".front__card").style.display = "none";
            element.querySelector(".back__card").style.display = "block";
        }, 300);
    }
}

document.getElementById("previousModal").addEventListener("click", function(){
        let element = document.getElementById("modalContent");
        let index = element.src.search(element.getAttribute('name')) + element.getAttribute('name').length;
        let newSrc = element.src.substr(0, index) + (element.src[index] == 1 ? "4" : parseInt(element.src[index]) - 1) + element.src.substr(index + 1, element.length);
        element.src = newSrc;
    });

document.getElementById("nextModal").addEventListener("click", function(){
    let element = document.getElementById("modalContent");
        let index = element.src.search(element.getAttribute('name')) + element.getAttribute('name').length;
        let newSrc = element.src.substr(0, index) + (element.src[index] == 4 ? "1" : parseInt(element.src[index]) + 1) + element.src.substr(index + 1, element.length);
        element.src = newSrc;
});

document.getElementById("closeModal").addEventListener("click", function(){
    modal.style.display = "none";
});

function openImg(event, element){
    event.preventDefault();
    event.stopPropagation();
    let modal = document.getElementById("modal"); 
    let img = document.getElementById("modalContent");
    img.src = element.src;
    modal.style.display = "flex";
    img.setAttribute('name', element.getAttribute('name'));
}