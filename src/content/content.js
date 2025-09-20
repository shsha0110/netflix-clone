import { create_category } from "./category/category.js";
import { create_rank } from "./rank/rank.js";
import { create_component } from "../utils.js";

function create_content(parent) {
    const content = create_component("main", "content", parent);
    create_category(content, slider_contents[0], 0);
    create_category(content, slider_contents[1], 1);
    create_rank(content, rank_contents[0], 0);
    create_category(content, slider_contents[2], 2);
    create_category(content, slider_contents[3], 3);
}

const slider_contents = [{header_text: "넷플릭스 시리즈", track_size: 6,
                          cards: [{img_src: "./content/category/images/slider_item1.jpg"}, 
                                {img_src: "./content/category/images/slider_item2.jpg"},
                                {img_src: "./content/category/images/slider_item3.jpg"},
                                {img_src: "./content/category/images/slider_item4.jpg"},
                                {img_src: "./content/category/images/slider_item5.jpg"}, 
                                {img_src: "./content/category/images/slider_item6.jpg"},
                                {img_src: "./content/category/images/slider_item7.webp"}, 
                                {img_src: "./content/category/images/slider_item8.webp"},
                                {img_src: "./content/category/images/slider_item9.webp"}, 
                                {img_src: "./content/category/images/slider_item10.webp"},
                                {img_src: "./content/category/images/slider_item11.webp"}, 
                                {img_src: "./content/category/images/slider_item12.webp"},
                                {img_src: "./content/category/images/slider_item13.jpg"}, 
                                {img_src: "./content/category/images/slider_item14.jpg"},
                                {img_src: "./content/category/images/slider_item15.webp"}, 
                                {img_src: "./content/category/images/slider_item16.webp"},
                                {img_src: "./content/category/images/slider_item17.jpg"}, 
                                {img_src: "./content/category/images/slider_item18.webp"},
                                {img_src: "./content/category/images/slider_item19.webp"}, 
                                {img_src: "./content/category/images/slider_item20.jpg"},
                                {img_src: "./content/category/images/slider_item21.webp"}, 
                                {img_src: "./content/category/images/slider_item22.webp"},
                                {img_src: "./content/category/images/slider_item23.webp"}, 
                                {img_src: "./content/category/images/slider_item24.webp"}]},

                       {header_text: "매주 공개! 이건 꼭 봐야 해", track_size: 5,
                        cards : [{img_src: "./content/category/images/slider_item5.jpg"}, 
                                {img_src: "./content/category/images/slider_item6.jpg"},
                                {img_src: "./content/category/images/slider_item7.webp"}, 
                                {img_src: "./content/category/images/slider_item8.webp"},
                                {img_src: "./content/category/images/slider_item9.webp"}, 
                                {img_src: "./content/category/images/slider_item10.webp"},
                                {img_src: "./content/category/images/slider_item11.webp"}, 
                                {img_src: "./content/category/images/slider_item12.webp"},
                                {img_src: "./content/category/images/slider_item13.jpg"}, 
                                {img_src: "./content/category/images/slider_item14.jpg"},
                                {img_src: "./content/category/images/slider_item15.webp"}, 
                                {img_src: "./content/category/images/slider_item16.webp"},
                                {img_src: "./content/category/images/slider_item17.jpg"}, 
                                {img_src: "./content/category/images/slider_item18.webp"},
                                {img_src: "./content/category/images/slider_item19.webp"}, 
                                {img_src: "./content/category/images/slider_item20.jpg"},
                                {img_src: "./content/category/images/slider_item21.webp"}, 
                                {img_src: "./content/category/images/slider_item22.webp"},
                                {img_src: "./content/category/images/slider_item23.webp"}, 
                                {img_src: "./content/category/images/slider_item24.webp"}]},

                        {header_text: "어워드 수상 범죄 시리즈", track_size: 6,
                        cards: [{img_src: "./content/category/images/slider_item13.jpg"}, 
                                {img_src: "./content/category/images/slider_item14.jpg"},
                                {img_src: "./content/category/images/slider_item15.webp"}, 
                                {img_src: "./content/category/images/slider_item16.webp"},
                                {img_src: "./content/category/images/slider_item17.jpg"}, 
                                {img_src: "./content/category/images/slider_item18.webp"},
                                {img_src: "./content/category/images/slider_item19.webp"}, 
                                {img_src: "./content/category/images/slider_item20.jpg"},
                                {img_src: "./content/category/images/slider_item21.webp"}, 
                                {img_src: "./content/category/images/slider_item22.webp"},
                                {img_src: "./content/category/images/slider_item23.webp"}, 
                                {img_src: "./content/category/images/slider_item24.webp"}]},
                    
                        {header_text: "어워드 수상 한국 드라마", track_size: 5,
                        cards: [{img_src: "./content/category/images/slider_item10.webp"},
                                {img_src: "./content/category/images/slider_item11.webp"}, 
                                {img_src: "./content/category/images/slider_item12.webp"},
                                {img_src: "./content/category/images/slider_item13.jpg"}, 
                                {img_src: "./content/category/images/slider_item14.jpg"},
                                {img_src: "./content/category/images/slider_item15.webp"}, 
                                {img_src: "./content/category/images/slider_item16.webp"},
                                {img_src: "./content/category/images/slider_item17.jpg"}, 
                                {img_src: "./content/category/images/slider_item18.webp"},
                                {img_src: "./content/category/images/slider_item19.webp"}, 
                                {img_src: "./content/category/images/slider_item20.jpg"},
                                {img_src: "./content/category/images/slider_item21.webp"}, 
                                {img_src: "./content/category/images/slider_item22.webp"},
                                {img_src: "./content/category/images/slider_item23.webp"}, 
                                {img_src: "./content/category/images/slider_item24.webp"}]}];

const rank_contents = [{header_text: "오늘 대한민국의 TOP 10 시리즈", track_size: 5,
                        cards: [{icon_src: "./content/rank/images/rank1_icon.svg", img_src: "./content/rank/images/rank1.jpg", inner_img_src: "./content/rank/images/rank1_inner.jpg"}, 
                                {icon_src: "./content/rank/images/rank2_icon.svg", img_src: "./content/rank/images/rank2.jpg", inner_img_src: "./content/rank/images/rank2_inner.jpg"},
                                {icon_src: "./content/rank/images/rank3_icon.svg", img_src: "./content/rank/images/rank3.jpg", inner_img_src: "./content/rank/images/rank3_inner.jpg"}, 
                                {icon_src: "./content/rank/images/rank4_icon.svg", img_src: "./content/rank/images/rank4.jpg", inner_img_src: "./content/rank/images/rank4_inner.jpg"},
                                {icon_src: "./content/rank/images/rank5_icon.svg", img_src: "./content/rank/images/rank5.jpg", inner_img_src: "./content/rank/images/rank5_inner.jpg"}, 
                                {icon_src: "./content/rank/images/rank6_icon.svg", img_src: "./content/rank/images/rank6.jpg", inner_img_src: "./content/rank/images/rank6_inner.jpg"},
                                {icon_src: "./content/rank/images/rank7_icon.svg", img_src: "./content/rank/images/rank7.jpg", inner_img_src: "./content/rank/images/rank7_inner.jpg"},
                                {icon_src: "./content/rank/images/rank8_icon.svg", img_src: "./content/rank/images/rank8.jpg", inner_img_src: "./content/rank/images/rank8_inner.jpg"},
                                {icon_src: "./content/rank/images/rank9_icon.svg", img_src: "./content/rank/images/rank9.jpg", inner_img_src: "./content/rank/images/rank9_inner.jpg"},
                                {icon_src: "./content/rank/images/rank10_icon.svg", img_src: "./content/rank/images/rank10.jpg", inner_img_src: "./content/rank/images/rank10_inner.jpg"}]}];

export { create_content };