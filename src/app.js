import { create_header } from "./header/header.js";
import { create_content } from "./content/content.js";
import { create_footer } from "./footer/footer.js";

create_header(document.body);
create_content(document.body);
create_footer(document.body);