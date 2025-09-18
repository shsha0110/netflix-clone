//  * @param {string} tag - 생성할 HTML 태그 이름 (e.g., 'div', 'img', 'p')
//  * @param {string} class_name - 요소에 적용할 클래스 이름
//  * @param {HTMLElement} parent - 생성된 요소를 추가할 부모 요소
//  * @returns {HTMLElement} 생성된 DOM 요소
function create_component(tag, class_name, parent) {
    const component = document.createElement(tag);
    component.className = class_name;
    parent.appendChild(component);
    return component;
}

//  * @param {string} tag - 생성할 HTML 태그 이름 (e.g., 'div', 'img', 'p')
//  * @param {string} class_name - 요소에 적용할 클래스 이름
//  * @param {HTMLElement} parent - 생성된 요소를 추가할 부모 요소
//  * @param {string} img_src - 이미지 요소 경로
function create_component_with_img(tag, class_name, parent, img_src) {
    const base = create_component(tag, class_name, parent);
    const img = create_component("img", `${class_name}-img`, base);
    img.src = img_src;
}

export {create_component, create_component_with_img}