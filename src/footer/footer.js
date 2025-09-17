// =================================================================
// Footer
// =================================================================
import { create_component, create_component_with_img } from "../utils.js";

// Functions
function create_member_link_row(items, parent) {
    const link_row = create_component("tr", "member-link-row", parent);
    items.forEach(item => {
        const member_link_container = create_component("td", "member-link-container", link_row);
        const member_link = create_component("a", "member-link", member_link_container);
        member_link.innerHTML = item.text;
        member_link.href = item.link;
    })
}

function create_footer(parent) {
    const footer = create_component("footer", "footer", parent);
    const social_link_container = create_component("ul", "social-link-container", footer);
    const social_link_items = [{img_src: "./footer/images/facebook_icon.png", class_name: "facebook-button"}, 
                            {img_src: "./footer/images/instagram_icon.png", class_name: "instagram-button"},
                            {img_src: "./footer/images/twitter_icon.png", class_name: "twitter-button"}, 
                            {img_src: "./footer/images/youtube_icon.png", class_name: "youtube-button"}];
    social_link_items.forEach(item => {
        create_component_with_img("button", item.class_name, social_link_container, item.img_src);
    });

    const member_link_table = create_component("table", "member-link-table", footer);
    const member_link_items = [[{text: "화면 해설", link: "#"}, {text: "고객 센터", link:"#"}, {text: "기프트카드", link: "#"}, {text: "미디어 센터", link: "#"}],
                            [{text: "투자 정보(IR)", link: "#"}, {text: "입사 정보", link:"#"}, {text: "이용 약관", link: "#"}, {text: "개인정보", link: "#"}],
                            [{text: "법적 고지", link: "#"}, {text: "쿠키 설정", link:"#"}, {text: "회사 정보", link: "#"}, {text: "문의하기", link: "#"}]];
    member_link_items.forEach(item => {
        create_member_link_row(item, member_link_table);
    })

    const copyright_container = create_component("ul", "copyright-container", footer);
    const copyright_items = [{text: "넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)"}, 
                            {text: "대표: 레지널드 숀 톰프슨"},
                            {text: "이메일 주소: korea@netflix.com"},
                            {text: "주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161"},
                            {text: "사업자등록번호: 165-87-00119"},
                            {text: "클라우드 호스팅: Amazon Web Services Inc."},
                            {text: "공정거래위원회 웹사이트"}];
    copyright_items.forEach(item => {
        const copyright_item = create_component("span", "copyright-item", copyright_container);
        copyright_item.innerHTML = item.text;
    })
}

export {create_footer}