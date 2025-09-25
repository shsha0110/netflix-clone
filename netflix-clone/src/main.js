import './style.css'; 

import { create_header } from "./header/header.js";
import { create_hero } from "./hero/hero.js";
import { create_content } from "./content/content.js";
import { create_footer } from "./footer/footer.js";

async function start_app() {
    const data_path = "/data/app_data.json";
    const response = await fetch(data_path);
    const data = await response.json();

    create_header(document.body, data.header);
    create_hero(document.body, data.hero);
    create_content(document.body, data.content);
    create_footer(document.body, data.footer);
} 

start_app();