import ProfileCard from "./ProfileCard";
import TheviBilde from "../../assets/thevi-profile.jpeg";
import TonyBilde from "../../assets/tony-profile.jpg";
import ThomasBilde from "../../assets/thomas.profile.jpg";
import viktorBilde from "../../assets/viktor-profile.jpg";
import OmarBilde from "../../assets/omar-profile.jpg";

const About = () => {
  return (
    <div id="#about" className="flex flex-col pb-8 mt-8 bg-[#fcf8f4]">
      <ProfileCard
        name="Issa Al-Musawi"
        nameBold="Issa Al-Musawi"
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/issaalmusawi"
        linkedinUrl="https://www.linkedin.com/in/issa-al-musawi-77684b96/"
        imageUrl={TheviBilde}
        description=" er en engasjert IT-student på 29 år fra Kristiansand, med en dyp interesse for teknologi, problemløsning og ledelse. Han har fra tidligere en bachelorgrad i statsvitenskap, og har gjennom IT studiet også utviklet en bred kompetanse innen IT og informasjonssystemer, med spesielt fokus på Full-Stack utvikling. Med erfaringer fra arbeidslivet og tidligere studier har Issa opparbeidet seg evnen til å tenke analytisk, samt utviklet en sterk teknisk og teoretisk forståelse for de ulike omgivelsene han befinner seg i. Issa er alltid klar til å påta seg nye utfordringer og tilegne seg ny kunnskap, der han kombinerer nysgjerrighet med viljen til å lære, og ser på hver oppgave som en mulighet til å utvikle seg."
        skills={{
          frontend: [
            "JavaScript",
            "Tailwind",
            "Bootstrap",
            "CSS",
            "HTML",
          ],
          backend: ["C#", "Java", "PHP", "Golang"],
          database: ["MySQL", "MariaDB"],
          tools: ["Docker", "Git", "npm", "Agile Methodology", "CLI"],
        }}
        additionalInfo=""
        personalWebsite=""
      />
      <ProfileCard
        name="Nhan Thomas Trong Nguyen"
        nameBold="Nhan Thomas"
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/NThomTNg"
        linkedinUrl="https://www.linkedin.com/in/nhan-thomas-nguyen-024860253/"
        imageUrl={ThomasBilde}
        description=" er en engasjert IT-student på 22 år fra Trondheim, med en stor interesse for teknologi og data. Gjennom flere år på universitet så har han utviklet en solid kompentanse innen IT. Dette gjelder både back-end og front-end. Nysgjerrighet og prøve ved feil har gitt han en god forståelse og kunnskap innenfor feltet, og han er alltid klar for å lære noe nytt og løse utfordringer. Gjennom høsten 2024 jobber Thomas hos Swipload, der han lærer veldig mye praktisk og profesjonell erfaring som kommer til å utvikle videre hans kompentanse."
        skills={{
          frontend: [
            "React",
            "Svelte",
            "TypeScript",
            "Javascript",
            "Tailwind",
            "Bootstrap",
          ],
          backend: ["C#", "Java", "Python", "Golang", "TypeScript"],
          database: ["MySQL", "Azure", "PostgreSQL", "Mongo DB"],
          tools: ["Docker", "Git", "npm", "Azure"],
        }}
        additionalInfo="Thomas jobber praksis hos Swipload i høst-perioden 2024 -"
        personalWebsite="https://nthomtng.github.io/PraksisNettSide/"
      />
      <ProfileCard
        name="Omar Passi"
        nameBold="Omar Passi"
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/Omarp321"
        linkedinUrl="https://www.linkedin.com/in/omarpassi1/"
        imageUrl={OmarBilde}
        description=" er en engasjert IT-student på 21 år fra Kristiansand, med en stor lidenskap for teknologi. Gjennom studietiden har Omar utviklet en solid kompetanse innen både front-end og back-end utvikling. Han kombinerer nysgjerrighet med sterk arbeidsetikk, og har en dyp interesse for å utvikle innovative løsninger. Omar trives med å løse komplekse problemer, og benytter sin analytiske ferdigheter og feilsøkingsevner for å finne de beste løsningene. For tiden er Omar i praksis hos Universitetet i Agder, hvor han får verdifull praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
        skills={{
          frontend: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
          backend: ["C#", "Java", "Python", "Golang", "PHP"],
          database: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB"],
          tools: ["Docker", "Git"],
        }}
        additionalInfo="Omar er praksisstudent hos UiA høsten 2024, for mer informasjon besøk -"
        personalWebsite="https://sites.google.com/view/UiA-Praksisprosjekt"
      />
      <ProfileCard
        name="Tony Nguyen Le"
        nameBold="Tony Nguyen Le "
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/TonyLe02"
        linkedinUrl="https://www.linkedin.com/in/tonynl02"
        imageUrl={TonyBilde}
        description="er en 22 år gammel IT-student fra Lillesand med en stor lidenskap for teknologi og problemløsning. Han har bygget en solid kompetanse innen IT, med spesielt fokus på Full-Stack utvikling. Med skarp analytisk tenkning og sterke feilsøkingsevner, er Tony alltid klar for nye utfordringer og muligheter til å lære. Han kombinerer nysgjerrighet med en sterk arbeidsetikk, og ser hver oppgave som en sjanse til å vokse. For tiden er han praksisstudent hos Swipload, hvor han videreutvikler sine ferdigheter innen programvareutvikling."
        skills={{
          frontend: [
            "React",
            "Svelte",
            "Tailwind",
            "JavaScript",
            "CSS",
            "HTML",
          ],
          backend: ["C#", "Java", "Python", "Golang", "TypeScript", "PHP"],
          database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
          tools: ["Docker", "Git", "npm", "DevOps Methodology", "Azure"],
        }}
        additionalInfo="Lær mer om Tony Nguyen Le og hans prosjekter ved å besøke nettsiden hans via -"
        personalWebsite="https://leworks.vercel.app/"
      />
      <ProfileCard
        name="Vi The Thach"
        nameBold="Vi The Thach "
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="https://github.com/thevithach"
        linkedinUrl="https://www.linkedin.com/in/vithethach/"
        imageUrl={TheviBilde}
        description="er en engasjert IT-student på 24 år fra Kristiansand, med en dyp interesse for teknologi og problemløsning. Han har utviklet en bred kompetanse innen IT, med spesielt fokus på Full-Stack utvikling. Med analytisk tenkning, sterk teknisk forståelse, og innovative løsninger er Vi alltid klar til å påta seg nye utfordringer og tilegne seg ny kunnskap. Han kombinerer nysgjerrighet med en sterk arbeidsetikk, og ser på hver oppgave som en mulighet til å utvikle seg. For tiden er Vi i praksis hos Phonero, hvor han får praktisk erfaring og videreutvikler sine ferdigheter innen programvareutvikling."
        skills={{
          frontend: [
            "React",
            "TypeScript",
            "JavaScript",
            "Tailwind",
            "Redux",
            "GraphQL",
            "SCSS",
            "Jest",
          ],
          backend: ["C#", "Java", "Python", "Golang", "TypeScript"],
          database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
          tools: ["Docker", "Git", "npm", "Agile Methodology", "Azure"],
        }}
        additionalInfo="Vi The Thach er praksisstudent hos Phonero høsten 2024, for mer informasjon besøk -"
        personalWebsite="https://thevithach.vercel.app"
      />

      <ProfileCard
        name="Viktor"
        nameBold="Viktor Kalhovd"
        title="Student | Full-Stack Utvikler"
        university="Universitet i Agder"
        githubUrl="httpsgithub.comViktorJGK"
        linkedinUrl="httpswww.linkedin.cominviktor-johan-glenne-kalhovd-4a0a14323"
        imageUrl={viktorBilde}
        description=", en 22 år gammel IT-student fra Egersund, har en sterk interesse for data, teknologi og problemløsning. Gjennom sitt studium ved Universitetet i Agder (UiA) har han utviklet en solid kompetanse innen IT, med en spesialisering i Full-Stack utvikling. Hans løsningsorienterte tilnærming, kombinert med en utholdende arbeidsmoral, har gitt ham en dyp forståelse av teknologiske utfordringer og de nødvendige ferdighetene for å løse komplekse problemer på en effektiv måte"
        skills={{
          frontend: ["TypeScript", "Tailwind", "CSS", "HTML"],
          backend: ["C#", "Java", "PHP", "Golang", "TypeScript"],
          database: ["MySQL", "MariaDB", "PostgreSQL", "MS SQL"],
          tools: ["Docker", "Git", "npm", "Agile Methodology"],
        }}
        additionalInfo=""
      />
    </div>
  );
};

export default About;
