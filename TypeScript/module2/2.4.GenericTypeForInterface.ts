{
    interface GenericObject<T>{
        name: string;
        address: {
            village: string,
            city: string,
            division: string
        },
        skills: T,
    }
    const frontEndDeveloper: GenericObject<{
        html: boolean,
        css: boolean,
        js: boolean;
    }> = {
        name: " Tuhin",
        address: {
            village: "paikan",
            city: "Nahi",
            division: "Randput",
        },
        skills:{
            html: true,
            css: true,
            js: true,
        }
    }

    interface FellStackDevSkills {
        html: boolean,
        css: boolean,
        js: boolean;
        docker: boolean,
    }
    const fullStackDev: GenericObject<FellStackDevSkills> = {
        name: "Tuhin",
        address: {
            village: "paikan",
            city: "Nahi",
            division: "Randput",
        },
        skills:{
            html: true,
            css: true,
            js: true,
            docker: true,
        }
    }
111}