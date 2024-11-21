<script setup lang="ts" name="HomeView">
import { ref } from 'vue'
import pen from '@/assets/svgs/Open.svg'
import penAdd from '@/assets/svgs/OpenAdd.svg'
import penTool from '@/assets/svgs/Open_tool.svg'
import OpenToolAdd from '@/assets/svgs/Open_toolAdd.svg'
import OBuildingBlocks from '@/assets/svgs/OBuilding_blocks.svg'
import OBuildingBlocksAdd from '@/assets/svgs/OBuilding_blocksAdd.svg'
import OGameConsole from '@/assets/svgs/OGameConsole.svg'
import OGameConsoleAdd from '@/assets/svgs/OGameConsoleAdd.svg'
import OSocializing from '@/assets/svgs/OSocializing.svg'
import OSocializingAdd from '@/assets/svgs/OSocializingAdd.svg'
import Ovideo from '@/assets/svgs/Ovideo.svg'
import OvideoAdd from '@/assets/svgs/OvideoAdd.svg'
import OurPortfolioo1 from '@/assets/images/OurPortfolioo1.png'
import OurPortfolioo2 from '@/assets/images/OurPortfolioo2.png'
import OurPortfolioo3 from '@/assets/images/OurPortfolioo3.png'
import OurPortfolioo4 from '@/assets/images/OurPortfolioo4.png'
import OurPortfolioo5 from '@/assets/images/OurPortfolioo5.png'
import OurPortfolioo6 from '@/assets/images/OurPortfolioo6.png'
import OurPortfolioo7 from '@/assets/images/OurPortfolioo7.png'
import OurPortfolioo8 from '@/assets/images/OurPortfolioo8.png'
import OurPortfolioo9 from '@/assets/images/OurPortfolioo9.png'

const OurServicesData = ref([
  {
    img: pen,
    title: 'Website Design & Development',
    title1: 'Website <span style="color: #fb653c;">Design</span> & Development',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.',
    hoverImg: penAdd,
    isHovered: false
  },
  {
    img: penTool,
    title: 'Logo Design',
    title1: 'Logo <span style="color: #fb653c;">Design</span>',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.',
    hoverImg: OpenToolAdd,
    isHovered: false
  },
  {
    img: OBuildingBlocks,
    title: 'DePIN',
    title1: 'DePIN',
    text: 'DePINs empower individuals and organizations to build, scale, and operate decentralized applications and services with unprecedented efficiency, security, and resilience.',
    hoverImg: OBuildingBlocksAdd
  },
  {
    img: OGameConsole,
    title: 'Gamefi',
    title1: 'Gamefi',
    text: 'GameFi is a combination of the terms gaming and decentralized finance (DeFi) . Smaller publishers in particular use the possibility of monetizing their games by issuing tokens.',
    hoverImg: OGameConsoleAdd
  },
  {
    img: OSocializing,
    title: 'Social app',
    title1: 'Social app',
    text: 'social media apps are decentralized platforms that leverage blockchain technology to prioritize user control, privacy, and data ownership.',
    hoverImg: OSocializingAdd
  },
  {
    img: Ovideo,
    title: 'DePIN',
    title1: 'DePIN',
    text: 'DePINs empower individuals and organizations to build, scale, and operate decentralized applications and services with unprecedented efficiency, security, and resilience.',
    hoverImg: OvideoAdd
  }
])

const navItems = [
  'LOGO DESIGN',
  'WEBSITE DESIGN',
  'VIDEO ANIMATION',
  'MOBILE APPS',
  'BRANDING'
]
const selectedNavIndex = ref(0)
function selectNavItem(index: number) {
  selectedNavIndex.value = index
}
const selectedNavIndex1 = ref(0)
function selectNavItem1(index: number) {
  selectedNavIndex1.value = index
}

const OurPortfolioData = ref([
  OurPortfolioo1,
  OurPortfolioo2,
  OurPortfolioo3,
  OurPortfolioo4,
  OurPortfolioo5,
  OurPortfolioo6,
  OurPortfolioo7,
  OurPortfolioo8,
  OurPortfolioo9
])

const TheBestListData = ref([
  {
    title: 'Basic Logo Package',
    NewPrice: '$30',
    oldPrice: '$70',
    Description: [
      '5 Custom Logo Design Concepts',
      'By 2 Designers',
      'UNLIMITED Revisions',
      '48 to 72 hours TAT',
      'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
      'Satisfaction Guarantee',
      'Unique Design Guarantee',
      'Money Back Guarantee *'
    ]
  },
  {
    title: 'Basic Logo Package',
    NewPrice: '$30',
    oldPrice: '$70',
    Description: [
      '5 Custom Logo Design Concepts',
      'By 2 Designers',
      'UNLIMITED Revisions',
      '48 to 72 hours TAT',
      'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
      'Satisfaction Guarantee',
      'Unique Design Guarantee',
      'Money Back Guarantee *'
    ]
  },
  {
    title: 'Basic Logo Package',
    NewPrice: '$30',
    oldPrice: '$70',
    Description: [
      '5 Custom Logo Design Concepts',
      'By 2 Designers',
      'UNLIMITED Revisions',
      '48 to 72 hours TAT',
      'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
      'Satisfaction Guarantee',
      'Unique Design Guarantee',
      'Money Back Guarantee *'
    ]
  },
  {
    title: 'Basic Logo Package',
    NewPrice: '$30',
    oldPrice: '$70',
    Description: [
      '5 Custom Logo Design Concepts',
      'By 2 Designers',
      'UNLIMITED Revisions',
      '48 to 72 hours TAT',
      'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
      'Satisfaction Guarantee',
      'Unique Design Guarantee',
      'Money Back Guarantee *'
    ]
  },
  {
    title: 'Basic Logo Package',
    NewPrice: '$30',
    oldPrice: '$70',
    Description: [
      '5 Custom Logo Design Concepts',
      'By 2 Designers',
      'UNLIMITED Revisions',
      '48 to 72 hours TAT',
      'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
      'Satisfaction Guarantee',
      'Unique Design Guarantee',
      'Money Back Guarantee *'
    ]
  },
  {
    title: 'Basic Logo Package',
    NewPrice: '$30',
    oldPrice: '$70',
    Description: [
      '5 Custom Logo Design Concepts',
      'By 2 Designers',
      'UNLIMITED Revisions',
      '48 to 72 hours TAT',
      'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
      'Satisfaction Guarantee',
      'Unique Design Guarantee',
      'Money Back Guarantee *'
    ]
  },
  {
    title: 'Basic Logo Package',
    NewPrice: '$30',
    oldPrice: '$70',
    Description: [
      '5 Custom Logo Design Concepts',
      'By 2 Designers',
      'UNLIMITED Revisions',
      '48 to 72 hours TAT',
      'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
      'Satisfaction Guarantee',
      'Unique Design Guarantee',
      'Money Back Guarantee *'
    ]
  },
  {
    title: 'Basic Logo Package',
    NewPrice: '$30',
    oldPrice: '$70',
    Description: [
      '5 Custom Logo Design Concepts',
      'By 2 Designers',
      'UNLIMITED Revisions',
      '48 to 72 hours TAT',
      'All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)',
      'Satisfaction Guarantee',
      'Unique Design Guarantee',
      'Money Back Guarantee *'
    ]
  }
])

const slides = ref([
  {
    title: '“ABCE1”',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. '
  },
  {
    title: '“ABCE2”',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. '
  },
  {
    title: '“ABCE3”',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. '
  }
])

const currentIndex = ref(0)

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

import { useWindowWidth } from '@/utils/useWindowSize'
const width = useWindowWidth()

const icon = ref('<')
const showButton = ref(false)

const toggleIcon = () => {
  showButton.value = !showButton.value
  icon.value = showButton.value ? '>' : '<'
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  icon.value = '<'
  showButton.value = false
}
</script>
<template>
  <!-- precursor -->
  <div class="home_view">
    <div class="top">
      <div class="ExclusiveDesign_bg">
        <div class="ExclusiveDesign">
          <div class="left_ExclusiveDesign">
            <div class="precursor_ExclusiveDesign">
              Exclusive Design Agency.
            </div>
            <LINE
              v-if="width > 1160"
              :color="'#fff'"
              :length_left="290"
              :length_right="146"
            ></LINE>
            <LINE
              v-if="width < 1161 && width > 834"
              :color="'#fff'"
              :length_left="255"
              :length_right="130"
            ></LINE>
            <LINE
              v-if="width < 835"
              :color="'#fff'"
              :length_left="180"
              :length_right="120"
            ></LINE>
            <div class="title_ExclusiveDesign">
              Delivering technological excellence with systemic
              <span class="fb653c">design</span> approach.
            </div>
            <div class="text_ExclusiveDesign">
              orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut.
            </div>
            <div class="button_ExclusiveDesign">
              <div class="button_E_left">Contact Us</div>
              <div class="button_E_right">Explore Services</div>
            </div>
          </div>
          <div class="right_ExclusiveDesign">
            <img src="@/assets/images/ExclusiveDesign.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="OurServices_bg">
      <div class="OurServices">
        <CONTANT v-if="width > 834"></CONTANT>
        <div class="VerticalGrid">
          <img
            v-if="width > 834"
            src="@/assets/images/VerticalGrid.png"
            alt=""
          />
          <img v-else src="@/assets/images/VerticalGridS.png" alt="" />
        </div>
        <div class="container">
          <div class="OurServices_precursor">Our Services</div>
          <LINE
            v-if="width > 1160"
            :color="'#1E1E22'"
            :length_left="350"
            :length_right="210"
          ></LINE>
          <LINE
            v-if="width < 1161 && width > 834"
            :color="'#1E1E22'"
            :length_left="260"
            :length_right="170"
          ></LINE>
          <LINE
            v-if="width < 834"
            :color="'#1E1E22'"
            :length_left="190"
            :length_right="120"
          ></LINE>
          <div class="OurServices_title">Only Exclusive Solutions</div>
          <div class="OurServices_text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut.
          </div>
          <div class="OurServices_father">
            <div
              class="OurServices_item"
              v-for="(item, index) in OurServicesData"
              :key="index"
              @mouseenter="item.isHovered = true"
              @mouseleave="item.isHovered = false"
            >
              <div class="OurSer_item_img">
                <img class="img" :src="item.img" alt="" />
              </div>
              <div
                class="OurSer_item_title"
                v-if="!item.isHovered"
                v-html="item.title"
              ></div>
              <div
                class="OurSer_item_title"
                v-if="item.isHovered"
                v-html="item.title1"
              ></div>
              <div class="OurSer_item_text">{{ item.text }}</div>
              <div class="OurSer_item_arrow">
                <img src="@/assets/svgs/OArrow.svg" alt="" />
              </div>
              <div class="OurSer_item_hoverImg">
                <img :src="item.hoverImg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <CONTANT :location="'right'"></CONTANT>
        <div class="VerticalGrid1">
          <img
            v-if="width > 834"
            src="@/assets/images/VerticalGrid.png"
            alt=""
          />
          <img v-else src="@/assets/images/VerticalGridS.png" alt="" />
        </div>
      </div>
    </div>

    <div class="HelpingBrands_bg">
      <div class="HelpingBrands">
        <div class="HelpingBrands_father">
          <div class="HelpingBrands_title">
            Helping Brands Outperform With Custom
            <span class="fb653c">Design</span>
          </div>
          <LINE
            v-if="width > 1570"
            :color="'#fff'"
            :length_left="300"
            :length_right="160"
          ></LINE>
          <LINE
            v-if="width < 1571 && width > 1160"
            :color="'#fff'"
            :length_left="220"
            :length_right="120"
          ></LINE>
          <LINE
            v-if="width < 1161"
            :color="'#fff'"
            :length_left="165"
            :length_right="95"
          ></LINE>
          <div class="HelpingBrands_text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut.
          </div>
          <div class="Help_E_C">
            <div class="HelpingBrands_Email">
              <div class="Email_icon">
                <img src="@/assets/svgs/call.svg" alt="" />
              </div>
              <div class="Email">
                <div class="Email_title">EMAIL US AT</div>
                <div class="Email_text">ABC@ABC.COM</div>
              </div>
            </div>
            <div class="line"></div>
            <div class="HelpingBrands_Chat">
              <div class="Chat_icon">
                <img src="@/assets/svgs/chat.svg" alt="" />
              </div>
              <div class="Chat">
                <div class="Chat_title">CLICK HERE TO</div>
                <div class="Chat_text">Live Chat</div>
              </div>
            </div>
            <div class="HelpingBrands_btn">Get In Touch</div>
          </div>
        </div>
        <div class="HelpingBrands_img">
          <img src="@/assets/images/Computer.png" alt="" />
        </div>
      </div>
    </div>

    <div class="OurPortfolioo">
      <div class="OurPortfolioo_precursor">Our Portfolio</div>
      <div class="line_O">
        <LINE
          v-if="width > 1160"
          :color="'#1E1E22'"
          :length_left="460"
          :length_right="200"
        ></LINE>
        <LINE
          v-if="width < 1161 && width > 834"
          :color="'#1E1E22'"
          :length_left="286"
          :length_right="150"
        ></LINE>
        <LINE
          v-if="width < 834"
          :color="'#1E1E22'"
          :length_left="170"
          :length_right="130"
        ></LINE>
      </div>

      <div class="OurPortfolioo_title">
        <CONTANT v-if="width > 834"></CONTANT>
        <div class="text">We Serve Almost All Industries</div>
      </div>
      <div class="OurPortfolioo_text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut.
      </div>

      <div class="container">
        <nav class="navbar">
          <ul class="nav-list">
            <li
              v-for="(item, index) in navItems"
              :key="index"
              @click="selectNavItem(index)"
              :class="{ active: selectedNavIndex === index }"
              class="nav-item"
            >
              {{ item }}
              <span
                class="underline"
                :class="{ visible: selectedNavIndex === index }"
              ></span>
            </li>
          </ul>
        </nav>
        <div class="OurPortfolioo_imgs">
          <div
            class="imgs_item"
            v-for="(item, index) in OurPortfolioData"
            :key="index"
          >
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="TheBest">
      <CONTANT v-if="width > 834"></CONTANT>
      <CONTANT :location="'right'"></CONTANT>
      <div class="VerticalGrid">
        <img v-if="width > 834" src="@/assets/images/VerticalGrid.png" alt="" />
        <img v-else src="@/assets/images/VerticalGridS.png" alt="" />
      </div>
      <div class="container">
        <div class="TheBest_precursor">Price</div>
        <div class="line_O">
          <LINE
            v-if="width > 1160"
            :color="'#1E1E22'"
            :length_left="330"
            :length_right="180"
          ></LINE>
          <LINE
            v-if="width < 1161 && width > 834"
            :color="'#1E1E22'"
            :length_left="200"
            :length_right="130"
          ></LINE>
          <LINE
            v-if="width < 834"
            :color="'#1E1E22'"
            :length_left="200"
            :length_right="130"
          ></LINE>
        </div>

        <div class="TheBest_title">The Best Offer For You</div>
        <div class="TheBest_text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut.
        </div>

        <nav class="navbar">
          <ul class="nav-list">
            <li
              v-for="(item, index) in navItems"
              :key="index"
              @click="selectNavItem1(index)"
              :class="{ active: selectedNavIndex1 === index }"
              class="nav-item"
            >
              {{ item }}
              <span
                class="underline"
                :class="{ visible: selectedNavIndex1 === index }"
              ></span>
            </li>
          </ul>
        </nav>
        <div class="TheBest_List">
          <div
            class="TheBest_item"
            v-for="(item, index) in TheBestListData"
            :key="index"
          >
            <div class="TheBest_item_title">{{ item.title }}</div>
            <div class="NewPrice">{{ item.NewPrice }}</div>
            <div class="oldPrice">{{ item.oldPrice }}</div>
            <div class="Description">
              <div class="Description_left_F">
                <div
                  class="Description_left"
                  v-for="(i, index) in item.Description"
                  :key="index"
                >
                  <div class="left_left">
                    <img src="@/assets/svgs/tick.svg" alt="" />
                  </div>
                  <div class="left_right">{{ i }}</div>
                </div>
              </div>
              <div class="Description_right">
                <img src="@/assets/svgs/VerticalLine.svg" alt="" />
              </div>
            </div>
            <div class="TheBest_item_bottom">
              <div class="TheBest_btn">Start Project</div>
              <div class="EAndC">
                <div class="TheBest_Email">
                  <div class="Email_icon">
                    <img src="@/assets/svgs/call_O.svg" alt="" />
                  </div>
                  <div class="Email">
                    <div class="Email_title">EMAIL US AT</div>
                    <div class="Email_text">ABC@ABC.COM</div>
                  </div>
                </div>
                <div class="line"></div>
                <div class="TheBest_Chat">
                  <div class="Chat_icon">
                    <img src="@/assets/svgs/chat_O.svg" alt="" />
                  </div>
                  <div class="Chat">
                    <div class="Chat_title">CLICK HERE TO</div>
                    <div class="Chat_text">Live Chat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="AllInOne_bg">
      <div class="VerticalGrid" v-if="width > 834">
        <img src="@/assets/images/VerticalGrid.png" alt="" />
      </div>
      <div class="container">
        <div class="AllInOne">
          <div class="AllInOne_left">
            <div class="AllInOne_precursor">All in one</div>
            <div class="AllInOne_title">COMBO</div>
            <div class="AllInOne_text">
              Ultimate Value for Start-ups and Businesses
            </div>
            <div class="AllInOne_li">
              <div class="li_item">
                <li>Unlimited Custom Logo Design Concepts</li>
                <li>6 Dedicated Designers</li>
                <li>UNLIMITED Pages Website</li>
                <li>Mobile Responsive</li>
                <li>Icon Design</li>
                <li>Business Card, Letterhead, Envelope</li>
                <li>MS Word Letterhead</li>
                <li>5 Stock Photos + 3 Banner Designs</li>
                <li>Complete W3C Certified HTML</li>
                <li>Complete Deployment</li>
                <li>Facebook Page Design</li>
                <li>All Final File Formats</li>
              </div>
              <div class="li_item">
                <li>Dedicated Account Manager</li>
                <li>100% Ownership Rights</li>
                <li>100% Satisfaction Guarantee</li>
                <li>100% Unique Design Guarantee</li>
                <li>100% Money Back Guarantee</li>
              </div>
            </div>
          </div>
          <div class="AllInOne_right">
            <div class="AllInOne_right_title">Combo Package</div>
            <div class="AllInOne_right_text">Complete Branding Solution</div>
            <div class="price">
              <div class="AllInOneNewPrice">£999</div>
              <div class="AllInOneOldPrice">
                <div class="text">£1,999</div>
                <div class="only">only</div>
              </div>
            </div>
            <div class="StraightDown">20% OFF For Bark Clientss</div>
            <div class="discuss">
              <div class="text">
                <div class="discuss_text">Want to discuss?</div>
                <div class="discuss_title">Live Chat Now</div>
              </div>
              <div class="discuss_btn">Start Project</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="LookingForReliable_bg">
      <div class="VerticalGrid" v-if="width < 834">
        <img src="@/assets/images/VerticalGridS.png" alt="" />
      </div>

      <CONTANT :location="'right_bottom'" v-if="width < 835"></CONTANT>
      <div class="LookingForReliable">
        <div class="LookingForReliable_L">
          <img src="@/assets/images/phone.png" alt="" />
        </div>
        <div class="LookingForReliable_R">
          <div class="LookingForReliable_title">
            Looking For Reliable Services?
          </div>
          <LINE
            v-if="width > 1160"
            :color="'#fff'"
            :length_left="320"
            :length_right="160"
          ></LINE>
          <LINE
            v-if="width < 1161 && width > 834"
            :color="'#fff'"
            :length_left="250"
            :length_right="120"
          ></LINE>
          <LINE
            v-if="width < 835"
            :color="'#fff'"
            :length_left="230"
            :length_right="100"
          ></LINE>
          <div class="LookingForReliable_text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut.
          </div>
          <div class="Look_E_C">
            <div class="LookingForReliable_Email">
              <div class="Email_icon">
                <img src="@/assets/svgs/call.svg" alt="" />
              </div>
              <div class="Email">
                <div class="Email_title">EMAIL US AT</div>
                <div class="Email_text">ABC@ABC.COM</div>
              </div>
            </div>
            <div class="line"></div>
            <div class="LookingForReliable_Chat">
              <div class="Chat_icon">
                <img src="@/assets/svgs/chat.svg" alt="" />
              </div>
              <div class="Chat">
                <div class="Chat_title">CLICK HERE TO</div>
                <div class="Chat_text">Live Chat</div>
              </div>
            </div>
            <div class="LookingForReliable_btn">Get In Touch</div>
          </div>
        </div>
      </div>
    </div>

    <div class="HaveAnyProject_bg">
      <CONTANT v-if="width > 834"></CONTANT>
      <div class="VerticalGrid">
        <img v-if="width > 834" src="@/assets/images/VerticalGrid.png" alt="" />
        <img v-else src="@/assets/images/VerticalGridS.png" alt="" />
      </div>
      <div class="container">
        <div class="HaveAnyProject">
          <div class="HaveAnyProject_L">
            <div class="HaveAnyProject_title">
              Have any project on mind! feel free contact with us or
              <span class="fb653c"> say hello </span> .
            </div>
            <div class="Information_F">
              <div class="Information">
                <div class="Information_icon">
                  <img src="@/assets/svgs/Information1.svg" alt="" />
                </div>
                <div class="text">
                  <div class="Information_text">Location</div>
                  <div class="Information_title">abc,2nd floor, USA</div>
                </div>
              </div>
              <div class="Information">
                <div class="Information_icon">
                  <img src="@/assets/svgs/Information2.svg" alt="" />
                </div>
                <div class="text">
                  <div class="Information_text">Email</div>
                  <div class="Information_title">abc@abc.com</div>
                </div>
              </div>
              <div class="Information">
                <div class="Information_icon">
                  <img src="@/assets/svgs/Information3.svg" alt="" />
                </div>
                <div class="text">
                  <div class="Information_text">Phone</div>
                  <div class="Information_title">1234567890987</div>
                </div>
              </div>
            </div>
          </div>
          <div class="HaveAnyProject_R">
            <div class="HaveAny_R_title">Get in Touch</div>
            <div class="HaveAny_R_text">
              Let's discuss your project right now
            </div>
            <input type="text" class="full_input" placeholder="Full Name" />
            <input type="text" class="full_input" placeholder="Enter Number" />
            <input type="text" class="full_input" placeholder="Enter Email" />
            <textarea
              class="fixed-textarea"
              maxlength="210"
              placeholder="Write Message"
            ></textarea>
            <div class="HaveAny_R_btn">Send Message</div>
          </div>
        </div>
      </div>
    </div>

    <div class="OurTestimonial_bg">
      <div class="VerticalGrid" v-if="width > 834">
        <img src="@/assets/images/VerticalGrid.png" alt="" />
      </div>
      <CONTANT :location="'right_bottom'" v-if="width < 835"></CONTANT>
      <div class="OurTestimonial">
        <div class="OurTestimonial_precursor">Our Testimonial</div>
        <LINE
          v-if="width > 834"
          :color="'#1E1E22'"
          :length_left="300"
          :length_right="170"
        ></LINE>
        <LINE
          v-if="width < 835"
          :color="'#1E1E22'"
          :length_left="100"
          :length_right="80"
        ></LINE>
        <div class="OurTestimonial_title">Our Clients Say</div>
        <div class="OurTestimonial_text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut.
        </div>

        <div class="OurTestimonial_bottom">
          <div class="bottom_bg">
            <div class="out_img">
              <img src="@/assets/images/people.png" alt="" />
            </div>
            <div class="OurTestimonial_bottom_z">
              <div class="carousel">
                <div @click="prevSlide" class="left-arrow">
                  <img src="@/assets/svgs/arrow_R.svg" alt="" />
                </div>

                <div class="carousel-content">
                  <div class="carousel_title">
                    {{ slides[currentIndex].title }}
                  </div>
                  <div class="carousel_text">
                    {{ slides[currentIndex].text }}
                  </div>
                </div>

                <div @click="nextSlide" class="arrow right-arrow">
                  <img src="@/assets/svgs/arrow_l.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="down">
              <img src="@/assets/svgs/down.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="icon-container">
    <div @click="toggleIcon" class="toggle-icon">
      {{ icon }}
    </div>
    <div v-if="showButton" @click="scrollToTop" class="back-to-top">
      <div class="">回到顶部</div>
    </div>
  </div>
</template>
<style scoped lang="less">
#icon-container {
  position: fixed;
  bottom: 20px;
  right: 0px;
  display: flex;
  align-items: center;
  z-index: 100;
}

.toggle-icon {
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 30px;
  background: #fb653c;
  border-right: #f5f5f5 solid 1px;
}

.back-to-top {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  background-color: #fb653c;
  color: white;
  border: none;
  cursor: pointer;
}

.fb653c {
  color: #fb653c;
}
.top {
  background: #1e1e22;
}
.home_view {
  background: #fff;
}
.container {
  width: 100%;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ExclusiveDesign_bg {
  background: linear-gradient(
    90deg,
    rgba(251, 101, 60, 0.27) 0%,
    rgba(251, 101, 60, 0) 50%
  );
  display: flex;
  padding: 108px 0;
  align-items: center;
  justify-content: center;

  .ExclusiveDesign {
    max-width: 1920px;
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: url(@/assets/images/CrossOfGrid.png) no-repeat;

    .left_ExclusiveDesign {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .precursor_ExclusiveDesign {
        color: #fff;
        font-family: Poppins;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -2px;
      }
      .title_ExclusiveDesign {
        color: #fff;
        font-family: Poppins;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -3px;
        max-width: 726px;
      }
      .text_ExclusiveDesign {
        color: #fff;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -1px;
        max-width: 704px;
      }
      .button_ExclusiveDesign {
        display: flex;
        gap: 10px;
        margin-top: 15px;
        color: #fff;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -1px;
        .button_E_left {
          width: 211px;
          height: 60px;
          flex-shrink: 0;
          border-radius: 31px;
          background: #fb653c;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;

          &:hover {
            box-shadow: 0px 0px 12px 0px #fff;
          }
        }
        .button_E_right {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 230px;
          height: 60px;
          flex-shrink: 0;
          border-radius: 31px;
          border: 1px solid #fff;
          cursor: pointer;
          //过渡效果

          transition: all 0.3s ease;

          &:hover {
            box-shadow: 0px 0px 16px 0px #fb653c;
          }
        }
      }
    }
    .right_ExclusiveDesign {
      width: 50%;
    }
  }
}
.OurServices_bg {
  background: #fff;
  padding-top: 125px;
  .OurServices {
    position: relative;
    // min-height: 1700px;
    padding-bottom: 125px;
    .VerticalGrid {
      position: absolute;
      top: -35px;
      right: 0;
      width: 250px;
      height: 556px;
      flex-shrink: 0;
    }
    .VerticalGrid1 {
      position: absolute;
      z-index: 1;
      bottom: -60px;
      left: 0;
      width: 250px;
      height: 556px;
      flex-shrink: 0;
    }
    .OurServices_precursor {
      margin-top: 20px;
      color: #1e1e22;
      font-family: Poppins;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1.5px;
      margin-bottom: 20px;
    }
    .OurServices_title {
      color: #1e1e22;
      font-family: Poppins;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2.5px;
      margin: 6px 0;
      text-align: center;
    }
    .OurServices_text {
      color: #808080;
      text-align: center;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1px;
      margin-bottom: 100px;
    }
    .OurServices_father {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      row-gap: 40px;
      flex-wrap: wrap;
      z-index: 3;

      .OurServices_item {
        width: 460px;
        height: 502px;
        flex-shrink: 0;
        border-radius: 20px;
        padding: 60px;
        position: relative;
        cursor: pointer;
        //过渡

        transition: all 0.3s ease;

        .OurSer_item_img {
          width: 70px;
          margin-bottom: 20px;
          .img {
            filter: brightness(0%);
          }
        }
        .OurSer_item_title {
          color: #1e1e22;
          font-family: Poppins;
          font-size: 50px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -2.5px;
          margin-bottom: 12px;
        }
        .OurSer_item_text {
          color: #1e1e22;
          font-family: Poppins;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -1px;
          margin-bottom: 40px;
        }
        .OurSer_item_arrow {
          display: none;
        }
        .OurSer_item_hoverImg {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 200px;
          display: none;
        }
      }
      .OurServices_item:hover {
        border-radius: 20px;
        background: #1e1e22;
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.25);
        .OurSer_item_title,
        .OurSer_item_text {
          color: #fff;
        }
        .OurSer_item_arrow {
          display: block;
        }
        .OurSer_item_img {
          .img {
            filter: brightness(100%);
          }
        }
        .OurSer_item_hoverImg {
          display: block;
        }
      }
    }
  }
}
.HelpingBrands_bg {
  position: relative;
  width: 100%;
  min-height: 423px;
  margin-top: 40px;
  background: #fff;
  display: flex;
  justify-content: end;
  .HelpingBrands {
    position: absolute;
    min-height: 423px;
    width: 80%;
    padding-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    background: #1e1e22;

    .HelpingBrands_title {
      margin-bottom: 10px;
      color: #fff;
      font-family: Poppins;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2.5px;
      max-width: 656px;
    }
    .HelpingBrands_text {
      margin: 12px 0;
      max-width: 731px;
      color: #fff;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1px;
    }
    .line {
      width: 1px;
      height: 19px;
      background: #3e3e41;
      margin-left: 15px;
      margin-right: 15px;
    }
    .Help_E_C {
      display: flex;
      align-items: center;
      .HelpingBrands_Email {
        display: flex;
        align-items: center;
        gap: 10px;

        .Email {
          display: flex;
          flex-direction: column;
          gap: 2px;
          .Email_title {
            color: #fff;
            font-family: Poppins;
            font-size: 8px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.4px;
          }
          .Email_text {
            color: #fff;
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.6px;
          }
        }
      }
      .HelpingBrands_Chat {
        display: flex;
        align-items: center;
        gap: 10px;

        .Chat {
          display: flex;
          flex-direction: column;
          gap: 2px;
          .Chat_title {
            color: #fff;
            font-family: Poppins;
            font-size: 8px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.4px;
          }
          .Chat_text {
            color: #fff;
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.6px;
          }
        }
      }

      .HelpingBrands_btn {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 159px;
        height: 42px;
        flex-shrink: 0;
        border-radius: 24px;
        background: #fb653c;
        margin-left: 30px;
        color: #fff;
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.9px;
      }
    }
    .HelpingBrands_img {
      position: absolute;
      top: -52px;
      left: -300px;
      width: 740px;
      z-index: 3;
    }
  }
}
.OurPortfolioo {
  margin-top: 200px;
  width: 100%;

  .OurPortfolioo_precursor {
    color: #1e1e22;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.5px;
    text-align: center;
  }
  .line_O {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 8px;
  }
  .OurPortfolioo_title {
    position: relative;

    .text {
      color: #1e1e22;
      font-family: Poppins;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2.5px;
      margin-bottom: 7px;
      text-align: center;
    }
  }
  .OurPortfolioo_text {
    color: #808080;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1px;
  }
  .navbar {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    margin-top: 80px;
    .nav-list {
      list-style: none;
      display: flex;
      gap: 100px;
    }

    .nav-item {
      position: relative;
      cursor: pointer;
      z-index: 3;
      color: #1e1e22;
      font-family: Poppins;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1.25px;
      padding-bottom: 4px;
    }

    .underline {
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 22px;
      background-color: #fb653c;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }
    .underline.visible {
      transform: scaleX(1);
    }
  }
  .OurPortfolioo_imgs {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 30px;
    margin-top: 80px;
    .imgs_item {
      width: 480px;
      height: 480px;
      flex-shrink: 0;
      img {
        border-radius: 16px;
      }
    }
  }
}
.TheBest {
  position: relative;
  margin-top: 100px;
  width: 100%;
  padding-bottom: 174px;
  .VerticalGrid {
    position: absolute;
    top: 40px;
    right: 0;
    width: 250px;
    height: 556px;
    flex-shrink: 0;
  }
  .TheBest_precursor {
    color: #1e1e22;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.5px;
  }
  .line_O {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 28px;
    margin-bottom: 6px;
  }
  .TheBest_title {
    color: #1e1e22;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -2.5px;
    margin-bottom: 7px;
  }
  .TheBest_text {
    color: #808080;

    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1px;
  }
  .navbar {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    margin-top: 80px;
    .nav-list {
      list-style: none;
      display: flex;
      gap: 100px;
    }

    .nav-item {
      position: relative;
      cursor: pointer;
      z-index: 3;
      color: #1e1e22;
      font-family: Poppins;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1.25px;
      padding-bottom: 4px;
    }

    .underline {
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 22px;
      background-color: #fb653c;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }
    .underline.visible {
      transform: scaleX(1);
    }
  }
  .TheBest_List {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 30px;
    margin-top: 80px;
    padding-bottom: 100px;
    .TheBest_item {
      width: 361px;
      min-height: 658px;
      flex-shrink: 0;
      border-radius: 10px;
      background: #1e1e22;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      .TheBest_item_title {
        color: #fb653c;
        text-align: center;
        font-family: Poppins;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 40px */
        letter-spacing: -2px;
        margin-bottom: 10px;
      }
      .NewPrice {
        color: #fff;
        text-align: center;
        font-family: Poppins;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 40px */
        letter-spacing: -2px;
      }
      .oldPrice {
        color: #fb653c;
        text-align: center;
        font-family: Poppins;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 15px */
        letter-spacing: -0.75px;
        text-decoration-line: strikethrough;
        //删除线
        text-decoration: line-through;
        margin-left: 46px;
        margin-bottom: 30px;
      }
      .Description {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        .Description_left_F {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .Description_left {
          display: flex;
          gap: 20px;
          row-gap: 12px;
          .left_left {
            width: 23px;
          }
          .left_right {
            width: 228px;
            color: #fff;
            font-family: Poppins;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 22.5px */
            letter-spacing: -0.75px;
          }
        }
        .Description_right {
          width: 6px;
          height: 195px;
          flex-shrink: 0;
        }
      }
      .TheBest_item_bottom {
        margin-top: 28px;
        width: 288px;
        border-top: 0.5px solid #808080;
        padding: 0px 20px;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .TheBest_btn {
          cursor: pointer;
          width: 172px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 39px;
          background: #fb653c;
          color: #fff;
          font-family: Poppins;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -1px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }
        .EAndC {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          .TheBest_Email,
          .TheBest_Chat {
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .Email_icon,
          .Chat_icon {
            width: 20px;
          }
          .Email_title,
          .Chat_title {
            color: #fff;
            font-family: Poppins;
            font-size: 8px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.4px;
          }

          .Email_text,
          .Chat_text {
            color: #fff;
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.6px;
          }

          .line {
            width: 1px;
            height: 19px;
            background: #3e3e41;
          }
        }
      }
    }
  }
}
.AllInOne_bg {
  position: relative;
  padding-bottom: 90px;
  .VerticalGrid {
    position: absolute;
    bottom: 0px;
    left: -80px;
    width: 250px;
    height: 556px;
    flex-shrink: 0;
  }
  .AllInOne {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .AllInOne_left {
      .AllInOne_precursor {
        color: #1e1e22;
        font-family: Poppins;
        font-size: 80px;
        font-style: normal;
        font-weight: 700;
        line-height: -150%; /* 120px */
        letter-spacing: -4px;
        margin-bottom: 10px;
      }
      .AllInOne_title {
        margin: -30px;
        color: #fb653c;
        font-family: Poppins;
        font-size: 200px;
        font-style: normal;
        font-weight: 700;
        line-height: -150%; /* 300px */
        letter-spacing: -10px;
      }
      .AllInOne_text {
        color: #1e1e22;
        font-family: Poppins;
        font-size: 38px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 57px */
        letter-spacing: -1.9px;
        margin-bottom: 10px;
      }
      .AllInOne_li {
        display: flex;
        gap: 40px;
        color: #1e1e22;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
        letter-spacing: -1px;
      }
    }
    .AllInOne_right {
      width: 640px;
      height: 690px;
      flex-shrink: 0;
      border-radius: 20px;
      background: #1e1e22;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .AllInOne_right_title {
        color: #fff;
        font-family: Poppins;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 60px */
        letter-spacing: -2px;
      }
      .AllInOne_right_text {
        color: #fff;
        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 45px */
        letter-spacing: -1.5px;
        margin-bottom: 10px;
      }
      .price {
        display: flex;
        align-items: center;
        gap: 30px;
        .AllInOneNewPrice {
          color: #fff;
          font-family: Poppins;
          font-size: 100px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 150px */
          letter-spacing: -5px;
        }
        .AllInOneOldPrice {
          color: #fff;
          font-family: Poppins;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 45px */
          letter-spacing: -1.5px;
          .text {
            text-decoration: line-through;
          }
        }
      }
      .StraightDown {
        margin-top: 25px;
        margin-bottom: 50px;
        width: 100%;
        height: 110px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fb653c;
        color: #fff;
        font-family: Poppins;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 60px */
        letter-spacing: -2px;
      }
      .discuss {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
        .discuss_text {
          color: #fff;
          font-family: Poppins;
          font-size: 26px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 39px */
          letter-spacing: -1.3px;
        }
        .discuss_title {
          color: #fff;
          font-family: Poppins;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 45px */
          letter-spacing: -1.5px;
        }
        .discuss_btn {
          cursor: pointer;
          border-radius: 51px;
          background: #fb653c;
          width: 284px;
          height: 70px;
          flex-shrink: 0;
          color: #fff;
          font-family: Poppins;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 45px */
          letter-spacing: -1.5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
.LookingForReliable_bg {
  width: 100%;
  background: #1e1e22;
  height: 396px;
  display: flex;
  justify-content: center;
  align-items: center;
  .LookingForReliable_L {
    position: absolute;
    left: 0;
    top: -130px;
    width: 550px;
  }
  .LookingForReliable {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: end;
    // align-items: center;
    padding-right: 150px;
    margin-left: 180px;
    max-width: 1920px;

    .LookingForReliable_R {
      display: flex;
      flex-direction: column;

      justify-content: center;
      gap: 20px;
      .LookingForReliable_title {
        color: #fff;
        font-family: Poppins;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -2.5px;
        margin-bottom: 10px;
      }
      .LookingForReliable_text {
        max-width: 731px;
        color: #fff;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -1px;
      }
    }
  }
  .Look_E_C {
    display: flex;
    align-items: center;
    .LookingForReliable_Email {
      display: flex;
      align-items: center;
      gap: 10px;

      .Email {
        display: flex;
        flex-direction: column;
        gap: 2px;
        .Email_title {
          color: #fff;
          font-family: Poppins;
          font-size: 8px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.4px;
        }
        .Email_text {
          color: #fff;
          font-family: Poppins;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.6px;
        }
      }
    }
    .line {
      width: 1px;
      height: 19px;
      background: #3e3e41;
      margin-left: 15px;
      margin-right: 15px;
    }
    .LookingForReliable_Chat {
      display: flex;
      align-items: center;
      gap: 10px;

      .Chat {
        display: flex;
        flex-direction: column;
        gap: 2px;
        .Chat_title {
          color: #fff;
          font-family: Poppins;
          font-size: 8px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.4px;
        }
        .Chat_text {
          color: #fff;
          font-family: Poppins;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.6px;
        }
      }
    }

    .LookingForReliable_btn {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 159px;
      height: 42px;
      flex-shrink: 0;
      border-radius: 24px;
      background: #fb653c;
      margin-left: 30px;
      color: #fff;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.9px;
    }
  }
}
.HaveAnyProject_bg {
  margin-top: 80px;
  width: 100%;
  position: relative;
  .VerticalGrid {
    position: absolute;
    top: -20px;
    right: 0px;
    width: 250px;
    height: 556px;
    flex-shrink: 0;
  }
  .HaveAnyProject {
    padding: 0 80px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    .HaveAnyProject_L {
      .HaveAnyProject_title {
        max-width: 642px;
        color: #1e1e22;
        font-family: Poppins;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -3px;
        margin-bottom: 80px;
      }
      .Information_F {
        display: flex;
        flex-direction: column;
        gap: 50px;
        margin-left: 50px;
        .Information {
          display: flex;
          gap: 20px;
          .Information_icon {
            width: 64px;
          }
          .Information_text {
            color: #1e1e22;
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -1px;
            margin-bottom: 4px;
          }
          .Information_title {
            color: #1e1e22;
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -1px;
          }
        }
      }
    }
    .HaveAnyProject_R {
      width: 604px;
      height: 797px;
      flex-shrink: 0;
      border-radius: 70px;
      background: #1e1e22;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .HaveAny_R_title {
        color: #fb653c;
        font-family: Poppins;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -2px;
        margin-bottom: 6px;
      }
      .HaveAny_R_text {
        color: #fff;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -1px;
        margin-bottom: 30px;
      }
      .full_input {
        width: 477px;
        height: 55px;
        flex-shrink: 0;
        border-radius: 41px;
        border: 1px solid #f5f5f5;
        padding: 18px 30px;
        margin-bottom: 27px;
        background: #1e1e22;
        color: #f5f5f5;
      }
      .full_input::placeholder {
        color: #7c7c7c90;
      }
      .fixed-textarea {
        color: #f5f5f5;
        width: 477px;
        height: 200px;
        flex-shrink: 0;
        flex-shrink: 0;
        resize: none; /* 禁用调整大小 */
        overflow: auto; /* 允许滚动 */
        padding: 18px 30px;
        font-size: 16px;
        border-radius: 30px;
        background: #1e1e22;
        border: 1px solid #f5f5f5;
        outline: none;
      }
      .fixed-textarea::placeholder {
        color: #7c7c7c90;
      }
    }
    .HaveAny_R_btn {
      cursor: pointer;
      color: #fff;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1px;
      width: 192px;
      height: 48px;
      flex-shrink: 0;
      border-radius: 24px;
      background: #fb653c;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }
  }
}
.OurTestimonial_bg {
  position: relative;
  .VerticalGrid {
    position: absolute;
    top: -10px;
    left: -40px;
    width: 200px;
    height: 480px;
    flex-shrink: 0;
    z-index: 0;
  }
  .OurTestimonial {
    position: relative;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    .OurTestimonial_precursor {
      color: #1e1e22;
      font-family: Poppins;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1.5px;
    }
    .OurTestimonial_title {
      color: #1e1e22;
      font-family: Poppins;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2.5px;
    }
    .OurTestimonial_text {
      color: #808080;
      text-align: center;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1px;
    }
    .OurTestimonial_bottom {
      margin-top: 210px;
      width: 100%;
      height: 596px;
      background: url('@/assets/images/OurTestimonial_bottom.png') no-repeat
        center;
      background-size: cover;
      .bottom_bg {
        position: relative;
        width: 100%;
        height: 100%;
        padding-top: 160px;
        background: rgba(30, 30, 34, 0.8);
        .out_img {
          position: absolute;
          top: -130px;
          left: 50%;
          transform: translate(-50%);

          width: 462px;
        }
        .OurTestimonial_bottom_z {
          .carousel {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 100px;
            margin: 0 auto;
            .left-arrow,
            .right-arrow {
              cursor: pointer;
              width: 62px;
              height: 62px;
              flex-shrink: 0;
            }
          }
          .carousel-content {
            text-align: center;
            margin: 0 20px;
            .carousel_title {
              color: #fb653c;
              text-align: center;
              font-family: Poppins;
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: -1.5px;
              margin-bottom: 16px;
            }

            .carousel_text {
              color: #fff;
              text-align: center;
              font-family: Poppins;
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: -1px;
              max-width: 646px;
            }
          }
        }
        .down {
          width: 100%;
          margin-top: 56px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
@media (max-width: 1570px) {
  .home_view {
    .container {
      padding: 0 70px;
    }
    .ExclusiveDesign_bg {
      padding: 70px 0;

      .ExclusiveDesign {
        padding: 0 70px;

        .left_ExclusiveDesign {
          gap: 10px;

          .title_ExclusiveDesign {
            font-size: 50px;
            max-width: 666px;
          }
          .text_ExclusiveDesign {
            font-size: 18px;
            max-width: 664px;
          }
          .button_ExclusiveDesign {
            .button_E_left {
              width: 180px;
              height: 50px;
            }
            .button_E_right {
              width: 200px;
              height: 50px;
            }
          }
        }
        .right_ExclusiveDesign {
          width: 40%;
        }
      }
    }
    .OurServices_bg {
      padding-top: 105px;
      .OurServices {
        padding-bottom: 105px;
        .OurServices_text {
          max-width: 606px;
        }
      }
    }
    .HelpingBrands_bg {
      .HelpingBrands {
        width: 78%;
        padding-right: 40px;
        min-height: 338px;

        .HelpingBrands_title {
          font-size: 38px;
          max-width: 486px;
        }
        .HelpingBrands_text {
          max-width: 500px;
          font-size: 18px;
        }

        .HelpingBrands_img {
          position: absolute;
          top: -42px;
          left: -260px;
          width: 600px;
          z-index: 3;
        }
      }
    }
    .OurPortfolioo {
      margin-top: 70px;

      .navbar {
        .nav-list {
          gap: 70px;
        }

        .nav-item {
          font-size: 20px;
        }

        .underline {
          height: 18px;
        }
      }
      .OurPortfolioo_imgs {
        .imgs_item {
          width: 400px;
          height: 400px;
        }
      }
    }
    .TheBest {
      .navbar {
        .nav-list {
          gap: 70px;
        }

        .nav-item {
          font-size: 20px;
        }

        .underline {
          height: 18px;
        }
      }
      .TheBest_List {
        margin-top: 60px;
      }
    }
    .AllInOne_bg {
      .AllInOne {
        .AllInOne_left {
          .AllInOne_precursor {
            font-size: 48px;
          }
          .AllInOne_title {
            margin: 0px;
            font-size: 100px;
          }
          .AllInOne_text {
            font-size: 28px;
          }
          .AllInOne_li {
            font-size: 18px;
          }
        }
        .AllInOne_right {
          width: 480px;
          height: 600px;
          .AllInOne_right_title {
            font-size: 34px;
          }
          .AllInOne_right_text {
            font-size: 26px;
          }
          .price {
            gap: 25px;
            .AllInOneNewPrice {
              font-size: 70px;
            }
            .AllInOneOldPrice {
              font-size: 22px;
            }
          }
          .StraightDown {
            margin-top: 25px;
            margin-bottom: 40px;
            height: 80px;
            font-size: 32px;
          }
          .discuss {
            gap: 20px;
            .discuss_text {
              font-size: 20px;
            }
            .discuss_title {
              font-size: 26px;
            }
            .discuss_btn {
              width: 240px;
              height: 60px;
              font-size: 24px;
            }
          }
        }
      }
    }
    .LookingForReliable_bg {
      height: 306px;

      .LookingForReliable_L {
        top: -110px;
        width: 480px;
      }
      .LookingForReliable {
        padding-right: 60px;
        margin-left: 60px;

        .LookingForReliable_R {
          gap: 10px;
          .LookingForReliable_title {
            font-size: 40px;
          }
          .LookingForReliable_text {
            max-width: 500px;

            font-size: 18px;
          }
        }
      }
      .Look_E_C {
        .LookingForReliable_btn {
          width: 130px;
          height: 36px;
          margin-left: 30px;
          font-size: 16px;
        }
      }
    }
    .HaveAnyProject_bg {
      .HaveAnyProject {
        padding: 0 70px;

        .HaveAnyProject_L {
          .HaveAnyProject_title {
            max-width: 502px;
            font-size: 46px;
            margin-bottom: 60px;
          }
          .Information_F {
            gap: 30px;
            margin-left: 30px;
            .Information {
              gap: 15px;
              .Information_icon {
                width: 50px;
              }
              .Information_text {
                font-size: 18px;
              }
              .Information_title {
                font-size: 16px;
              }
            }
          }
        }
        .HaveAnyProject_R {
          width: 480px;
          height: 700px;
          border-radius: 60px;
          .HaveAny_R_title {
            font-size: 34px;
          }
          .HaveAny_R_text {
            font-size: 16px;
          }
          .full_input {
            width: 400px;
            height: 52px;
            padding: 10px 20px;
          }
          .fixed-textarea {
            width: 400px;
            height: 200px;
            padding: 10px 20px;
            font-size: 16px;
          }
        }
        .HaveAny_R_btn {
          font-size: 18px;
          width: 182px;
          height: 44px;
        }
      }
    }
  }
}
@media (max-width: 1160px) {
  .home_view {
    .container {
      padding: 0 34px;
    }
    .ExclusiveDesign_bg {
      padding: 50px 0;

      .ExclusiveDesign {
        padding: 0 34px;

        .left_ExclusiveDesign {
          gap: 10px;
          .precursor_ExclusiveDesign {
            font-size: 36px;
          }
          .title_ExclusiveDesign {
            font-size: 28px;
            max-width: 380px;
          }
          .text_ExclusiveDesign {
            font-size: 16px;
            max-width: 380px;
          }
          .button_ExclusiveDesign {
            font-size: 16px;
            .button_E_left {
              width: 160px;
              height: 40px;
            }
            .button_E_right {
              width: 180px;
              height: 40px;
            }
          }
        }
        .right_ExclusiveDesign {
          width: 45%;
        }
      }
    }
    .OurServices_bg {
      padding-top: 85px;
      .OurServices {
        padding-bottom: 85px;
        .VerticalGrid {
          width: 200px;
        }
        .VerticalGrid1 {
          width: 200px;
        }
        .OurServices_precursor {
          font-size: 28px;
        }
        .OurServices_title {
          font-size: 40px;
        }
        .OurServices_text {
          font-size: 18px;

          margin-bottom: 60px;
        }
        .OurServices_father {
          .OurServices_item {
            width: 420px;
            height: 502px;
            padding: 60px;

            .OurSer_item_img {
              width: 60px;
            }
            .OurSer_item_title {
              font-size: 40px;
            }

            .OurSer_item_hoverImg {
              width: 160px;
            }
          }
        }
      }
    }
    .HelpingBrands_bg {
      min-height: 363px;
      .HelpingBrands {
        width: 80%;
        padding-right: 0px;
        min-height: 308px;

        .HelpingBrands_title {
          font-size: 30px;
          max-width: 390px;
        }
        .HelpingBrands_text {
          max-width: 380px;
          font-size: 18px;
        }
        .Help_E_C {
          .HelpingBrands_Email {
            gap: 6px;
          }
          .HelpingBrands_Chat {
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .HelpingBrands_btn {
            width: 120px;
            height: 36px;
            margin-left: 20px;
            font-size: 15px;
          }
        }
        .HelpingBrands_img {
          width: 450px;
          z-index: 3;
          top: -0px;
          left: -170px;
        }
      }
    }
    .OurPortfolioo {
      margin-top: 60px;
      .OurPortfolioo_precursor {
        font-size: 20px;
      }
      .line_O {
        margin-top: 10px;
      }
      .OurPortfolioo_title {
        .text {
          font-size: 30px;
        }
      }
      .OurPortfolioo_text {
        font-size: 16px;
        max-width: 440px;
        margin: 0 auto;
      }
      .navbar {
        margin-top: 40px;
        .nav-list {
          gap: 20px;
        }

        .nav-item {
          font-size: 16px;
        }

        .underline {
          height: 11px;
          bottom: 4px;
        }
      }
      .OurPortfolioo_imgs {
        margin-top: 40px;
        .imgs_item {
          width: 350px;
          height: 350px;
        }
      }
    }
    .TheBest {
      .TheBest_precursor {
        font-size: 20px;
      }
      .line_O {
        margin-top: 10px;
      }
      .TheBest_title {
        font-size: 30px;
        margin-bottom: 7px;
      }
      .TheBest_text {
        font-size: 16px;
        max-width: 400px;
        text-align: center;
      }
      .navbar {
        margin-top: 40px;
        .nav-list {
          gap: 20px;
        }

        .nav-item {
          font-size: 16px;
        }

        .underline {
          height: 11px;
          bottom: 4px;
        }
      }
      .TheBest_List {
        margin-top: 40px;
      }
    }
    .AllInOne_bg {
      margin-top: 20px;
      .AllInOne {
        .AllInOne_left {
          .AllInOne_precursor {
            font-size: 30px;
            letter-spacing: 0px;
          }
          .AllInOne_title {
            margin: 0px;
            font-size: 50px;
            letter-spacing: 0px;
          }
          .AllInOne_text {
            font-size: 18px;
            letter-spacing: 0px;
          }
          .AllInOne_li {
            font-size: 14px;
          }
        }
        .AllInOne_right {
          width: 320px;
          height: 430px;
          .AllInOne_right_title {
            font-size: 20px;
          }
          .AllInOne_right_text {
            font-size: 24px;
          }
          .price {
            gap: 20px;
            .AllInOneNewPrice {
              font-size: 50px;
            }
            .AllInOneOldPrice {
              font-size: 16px;
            }
          }
          .StraightDown {
            margin-top: 20px;
            margin-bottom: 20px;
            height: 60px;
            font-size: 24px;
          }
          .discuss {
            gap: 10px;
            .discuss_text {
              font-size: 16px;
            }
            .discuss_title {
              font-size: 20px;
            }
            .discuss_btn {
              width: 130px;
              height: 40px;
              font-size: 16px;
            }
          }
        }
      }
    }
    .LookingForReliable_bg {
      height: 286px;

      .LookingForReliable_L {
        top: -80px;
        width: 380px;
      }
      .LookingForReliable {
        padding-right: 10px;
        margin-left: 10px;

        .LookingForReliable_R {
          gap: 6px;
          .LookingForReliable_title {
            font-size: 30px;
          }
          .LookingForReliable_text {
            max-width: 400px;
            font-size: 14px;
          }
        }
      }
      .Look_E_C {
        .LookingForReliable_btn {
          width: 130px;
          height: 36px;
          margin-left: 30px;
          font-size: 16px;
        }
      }
    }
    .HaveAnyProject_bg {
      .HaveAnyProject {
        padding: 0 34px;

        .HaveAnyProject_L {
          .HaveAnyProject_title {
            max-width: 302px;
            font-size: 30px;
            margin-bottom: 40px;
            margin-left: 40px;
          }
          .Information_F {
            gap: 20px;
            margin-left: 50px;
            .Information {
              gap: 15px;
              .Information_icon {
                width: 50px;
              }
              .Information_text {
                font-size: 18px;
              }
              .Information_title {
                font-size: 16px;
              }
            }
          }
        }
        .HaveAnyProject_R {
          width: 300px;
          height: 540px;
          border-radius: 40px;
          .HaveAny_R_title {
            font-size: 30px;
          }
          .HaveAny_R_text {
            font-size: 14px;
            margin-bottom: 15px;
          }
          .full_input {
            width: 240px;
            height: 42px;
            padding: 8px 10px;
            margin-bottom: 15px;
          }
          .fixed-textarea {
            width: 240px;
            height: 200px;
            padding: 8px 10px;
            font-size: 16px;
            border-radius: 12px;
          }
        }
        .HaveAny_R_btn {
          margin-top: 15px;
          font-size: 16px;
          width: 162px;
          height: 40px;
        }
      }
    }
    .OurTestimonial_bg {
      .OurTestimonial {
        padding-top: 120px;

        .OurTestimonial_precursor {
          font-size: 20px;
        }
        .OurTestimonial_title {
          font-size: 30px;
        }
        .OurTestimonial_text {
          font-size: 16px;
        }
        .OurTestimonial_bottom {
          margin-top: 150px;

          height: 400px;

          .bottom_bg {
            padding-top: 120px;
            .out_img {
              top: -105px;
              width: 362px;
            }
            .OurTestimonial_bottom_z {
              padding: 0 30px;
              .carousel {
                gap: 30px;
                .left-arrow,
                .right-arrow {
                  width: 42px;
                  height: 42px;
                }
              }
              .carousel-content {
                margin: 0 0px;
                .carousel_title {
                  font-size: 20px;
                }

                .carousel_text {
                  font-size: 16px;
                  max-width: 646px;
                }
              }
            }
            .down {
              width: 100%;
              margin-top: 40px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 834px) {
  .home_view {
    .container {
      padding: 0 20px;
    }
    .ExclusiveDesign_bg {
      width: 100%;
      padding: 50px 0;
      padding-bottom: 0;
      background: linear-gradient(
        to right,
        rgba(251, 101, 60, 0.27) 0%,
        rgba(251, 101, 60, 0) 100%
      );
      .ExclusiveDesign {
        width: 100%;
        padding: 0 20px;
        flex-direction: column;
        background: url(@/assets/images/CrossOfGridS.png) no-repeat;

        .left_ExclusiveDesign {
          gap: 12px;
          .precursor_ExclusiveDesign {
            font-size: 18px;
            letter-spacing: -0.9px;
          }
          .title_ExclusiveDesign {
            max-width: 100%;
            font-size: 30px;
            letter-spacing: -1.5px;
          }
          .text_ExclusiveDesign {
            max-width: 100%;
            font-size: 12px;
            letter-spacing: -0.6px;
          }
          .button_ExclusiveDesign {
            gap: 10px;
            margin-top: 6px;
            letter-spacing: -0.6px;
            .button_E_left {
              width: 143px;
              height: 40px;
            }
            .button_E_right {
              width: 157px;
              height: 40px;
            }
          }
        }
        .right_ExclusiveDesign {
          width: 300px;
        }
      }
    }
    .OurServices_bg {
      padding-top: 55px;
      .OurServices {
        padding-bottom: 45px;
        .VerticalGrid {
          top: 10px;
          right: 0;
          width: 76px;
          height: 380px;
        }
        .VerticalGrid1 {
          position: absolute;
          z-index: 1;
          bottom: 80px;
          left: 0;
          width: 70px;
          height: 380px;
          flex-shrink: 0;
        }
        .OurServices_precursor {
          margin-top: 0px;
          margin-bottom: 10px;
          font-size: 18px;
          letter-spacing: -0.9px;
        }
        .OurServices_title {
          color: #1e1e22;

          margin: 6px 0;
          font-size: 30px;

          letter-spacing: -1.5px;
        }
        .OurServices_text {
          margin-bottom: 40px;
          max-width: 396px;
          font-size: 12px;
          letter-spacing: -0.6px;
        }
        .OurServices_father {
          row-gap: 20px;
          margin-bottom: 110px;
          .OurServices_item {
            width: 260px;
            height: 260px;
            flex-shrink: 0;
            border-radius: 20px;
            padding: 16px;
            border-bottom: 1px solid #d8d5d5;
            .OurSer_item_img {
              width: 40px;
              margin-bottom: 15px;
            }
            .OurSer_item_title {
              font-size: 20px;
              letter-spacing: -1px;
              margin-bottom: 10px;
            }
            .OurSer_item_text {
              font-size: 12px;
              letter-spacing: -0.6px;
              margin-bottom: 14px;
              max-width: 100%;
            }
            .OurSer_item_arrow {
              width: 22px;
            }
            .OurSer_item_hoverImg {
              width: 90px;
            }
          }
        }
      }
    }
    .HelpingBrands_bg {
      min-height: 353px;
      margin-top: 100px;
      justify-content: center;
      .HelpingBrands {
        width: 100%;
        padding-right: 0px;
        justify-content: end;
        padding: 0 20px;
        padding-bottom: 20px;
        min-height: 353px;

        .HelpingBrands_title {
          margin-bottom: 10px;
          max-width: 100%;
          font-size: 26px;
          letter-spacing: -1.5px;
        }
        .HelpingBrands_text {
          margin: 12px 0;
          max-width: 100%;
          font-size: 12px;
          letter-spacing: -0.6px;
        }
        .line {
          height: 15px;
          margin-left: 10px;
          margin-right: 10px;
        }
        .Help_E_C {
          .HelpingBrands_Email {
            gap: 5px;
            .Email {
              .Email_title {
                font-size: 8px;
                letter-spacing: -0.3px;
              }
              .Email_text {
                font-size: 10px;
                letter-spacing: -0.3px;
              }
            }
          }
          .HelpingBrands_Chat {
            gap: 5px;
            .Chat {
              .Chat_title {
                font-size: 8px;
                letter-spacing: -0.3px;
              }
              .Chat_text {
                font-size: 10px;
                letter-spacing: -0.3px;
              }
            }
          }

          .HelpingBrands_btn {
            width: 95px;
            height: 24px;
            margin-left: 20px;
            font-size: 10px;
            letter-spacing: -0.4px;
          }
        }
        .HelpingBrands_img {
          position: absolute;
          top: -112px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          z-index: 3;
        }
      }
    }
    .OurPortfolioo {
      margin-top: 40px;

      .OurPortfolioo_precursor {
        font-size: 18px;
        letter-spacing: -0.9px;
      }
      .line_O {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .OurPortfolioo_title {
        .text {
          font-size: 30px;
          letter-spacing: -1.5px;
          margin-bottom: 7px;
        }
      }
      .OurPortfolioo_text {
        font-size: 12px;
        letter-spacing: -0.6px;
        max-width: 100%;
        padding: 0 20px;
      }
      .navbar {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        margin-top: 40px;
        .nav-list {
          flex-wrap: wrap;
          display: flex;
          justify-content: center;
          gap: 20px;
          row-gap: 10px;
        }

        .nav-item {
          font-size: 12px;
          letter-spacing: -0.5px;
          padding-bottom: 0px;
        }

        .underline {
          bottom: 1.5px;
          height: 8px;
        }
      }
      .OurPortfolioo_imgs {
        row-gap: 12px;
        margin-top: 50px;
        .imgs_item {
          width: 180px;
          height: 180px;
        }
      }
    }
    .TheBest {
      margin-top: 40px;
      padding-bottom: 40px;
      .VerticalGrid {
        position: absolute;
        top: 40px;
        right: 0;
        width: 70px;
        flex-shrink: 0;
      }
      .TheBest_precursor {
        font-size: 18px;
        letter-spacing: -0.9px;
      }
      .line_O {
        margin-top: 8px;
        margin-bottom: 6px;
      }
      .TheBest_title {
        font-size: 30px;
        letter-spacing: -1.5px;
        margin-bottom: 7px;
      }
      .TheBest_text {
        font-size: 12px;
        letter-spacing: -0.6px;
      }
      .navbar {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        margin-top: 40px;
        .nav-list {
          flex-wrap: wrap;
          display: flex;
          justify-content: center;
          gap: 20px;
          row-gap: 10px;
        }

        .nav-item {
          font-size: 12px;
          letter-spacing: -0.5px;
          padding-bottom: 0px;
        }

        .underline {
          bottom: 1.5px;
          height: 8px;
        }
      }
      .TheBest_List {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        row-gap: 30px;
        margin-top: 40px;
        margin-bottom: 15px;
        .TheBest_item {
          width: 197px;
          min-height: 359.075px;
          border-radius: 10px;
          background: #1e1e22;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          .TheBest_item_title {
            font-size: 25px;
            letter-spacing: -1.25px;
            margin-bottom: 5px;
          }
          .NewPrice {
            font-size: 20px;
            letter-spacing: -1px;
            margin-bottom: 3px;
          }
          .oldPrice {
            font-size: 8px;

            letter-spacing: -0.4px;

            margin-left: 20px;
            margin-bottom: 15px;
          }
          .Description {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            .Description_left_F {
              display: flex;
              flex-direction: column;
              gap: 0px;
            }
            .Description_left {
              display: flex;
              gap: 10px;
              row-gap: 0px;
              .left_left {
                width: 12px;
              }
              .left_right {
                width: 120px;
                font-size: 8px;
                line-height: 150%;
                letter-spacing: -0.4px;
              }
            }
            .Description_right {
              width: 6px;
              height: 130px;
            }
          }
          .TheBest_item_bottom {
            margin-top: 15px;
            width: 150px;
            padding: 0px 0px;
            padding-top: 15px;

            .TheBest_btn {
              width: 93.861px;
              height: 22.92px;
              font-size: 10px;
              letter-spacing: -0.4px;
              margin-bottom: 14px;
            }
            .EAndC {
              margin-top: 0;
              .TheBest_Email,
              .TheBest_Chat {
                display: flex;
                align-items: center;
                gap: 3px;
              }

              .Email_icon,
              .Chat_icon {
                width: 12px;
              }
              .Email_title,
              .Chat_title {
                font-size: 6px;
              }

              .Email_text,
              .Chat_text {
                font-size: 8px;
                letter-spacing: -0.4px;
              }

              .line {
                width: 1px;
                height: 10px;
                margin: 0 5px;
              }
            }
          }
        }
      }
    }
    .AllInOne_bg {
      position: relative;
      padding-bottom: 40px;

      .AllInOne {
        flex-direction: column;
        .AllInOne_left {
          margin-top: -60px;
          margin-bottom: 30px;
          .AllInOne_precursor {
            margin-bottom: 0px;
            font-size: 20px;

            letter-spacing: -1px;
          }
          .AllInOne_title {
            margin: -10px 0;
            font-size: 40px;
            line-height: 150%; /* 60px */
            letter-spacing: -2px;
          }
          .AllInOne_text {
            margin-bottom: 6px;
            font-size: 12px;
            letter-spacing: -0.6px;
          }
          .AllInOne_li {
            gap: 10px;
            font-size: 9px;
            letter-spacing: -0.4px;
          }
        }
        .AllInOne_right {
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          padding: 30px 0;
          .AllInOne_right_title {
            font-size: 30px;
            letter-spacing: -1.5px;
            margin-bottom: 10px;
          }
          .AllInOne_right_text {
            font-size: 20px;
            letter-spacing: -1px;
            margin-bottom: 10px;
          }
          .price {
            display: flex;
            align-items: center;
            gap: 16px;
            .AllInOneNewPrice {
              font-size: 50px;
              letter-spacing: -3px;
            }
            .AllInOneOldPrice {
              font-size: 12px;
              letter-spacing: -0.5px;
              .text {
                text-decoration: line-through;
              }
            }
          }
          .StraightDown {
            margin-top: 15px;
            margin-bottom: 40px;
            height: 86px;
            font-size: 26px;
            letter-spacing: -1px;
            text-align: center;
          }
          .discuss {
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 15px;
            margin-top: 0px;
            .discuss_text {
              font-size: 18px;
              letter-spacing: -1px;
            }
            .discuss_title {
              font-size: 18px;
              letter-spacing: -1px;
            }
            .discuss_btn {
              width: 140px;
              height: 40px;
              font-size: 12px;
              letter-spacing: -0.6px;
            }
          }
        }
      }
    }
    .LookingForReliable_bg {
      position: relative;
      min-height: 586px;
      padding-top: 220px;
      background: #fff;
      .VerticalGrid {
        position: absolute;
        left: 0;
        top: 50px;
        height: 160px;
      }
      .LookingForReliable {
        height: 100%;
        display: flex;
        justify-content: end;
      }
      .LookingForReliable_L {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -130px;
        width: 300px;
      }
      .LookingForReliable {
        padding-right: 0px;
        padding: 20px;
        justify-content: center;
        align-items: end;
        margin-left: 0px;
        background: #000;

        .LookingForReliable_R {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
          .LookingForReliable_title {
            font-size: 30px;
            letter-spacing: -1.5px;
            margin-bottom: 10px;
          }
          .LookingForReliable_text {
            max-width: 100%;
            font-size: 12px;
            letter-spacing: -0.6px;
            margin: 10px 0;
          }
        }
      }
      .Look_E_C {
        display: flex;

        .Email_icon {
          width: 18px;
        }
        .Chat_icon {
          width: 14px;
        }
        .LookingForReliable_Email {
          gap: 4px;

          .Email {
            gap: 0px;
            .Email_text {
              font-size: 10px;
            }
          }
        }
        .line {
          height: 12px;
          margin-left: 5px;
          margin-right: 5px;
        }
        .LookingForReliable_Chat {
          gap: 2px;

          .Chat {
            gap: 0px;
            .Chat_text {
              font-size: 10px;
            }
          }
        }

        .LookingForReliable_btn {
          width: 90px;
          height: 24px;
          margin-left: 15px;
          font-size: 8px;
          letter-spacing: -0.4px;
        }
      }
    }
    .HaveAnyProject_bg {
      margin-top: 40px;
      width: 100%;
      position: relative;
      .VerticalGrid {
        position: absolute;
        top: 80px;
        right: 0px;
        width: 70px;
        height: 100%;
        flex-shrink: 0;
      }
      .HaveAnyProject {
        padding: 0 0px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: column;
        .HaveAnyProject_L {
          .HaveAnyProject_title {
            max-width: 100%;
            font-size: 30px;
            letter-spacing: -1.4px;
            margin: 0px;
            margin-bottom: 10px;
          }
          .Information_F {
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            gap: 8px;
            margin-left: 0px;
            margin-bottom: 40px;
            .Information {
              display: flex;
              gap: 4px;
              .Information_icon {
                width: 28px;
              }
              .Information_text {
                color: #1e1e22;
                font-family: Poppins;
                font-size: 10px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: -1px;
                margin-bottom: 0px;
              }
              .Information_title {
                color: #1e1e22;
                font-family: Poppins;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -1px;
              }
            }
          }
        }
        .HaveAnyProject_R {
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          border-radius: 30px;
          padding: 30px 20px;
          .HaveAny_R_title {
            font-size: 20px;
            letter-spacing: -1px;
            margin-bottom: 6px;
          }
          .HaveAny_R_text {
            font-size: 12px;
            letter-spacing: 0.6px;
            margin-bottom: 20px;
          }
          .full_input {
            width: 100%;
            height: 48px;
            border-radius: 40px;
            padding: 14px 20px;
            margin-bottom: 12px;
          }
          .full_input::placeholder {
            font-size: 12px;
          }
          .fixed-textarea {
            color: #f5f5f5;
            width: 100%;
            height: 200px;
            padding: 14px 20px;
            font-size: 12px;
          }
          .fixed-textarea::placeholder {
            font-size: 12px;
          }
        }
        .HaveAny_R_btn {
          font-size: 12px;
          letter-spacing: -0.6px;
          width: 132px;
          height: 34px;

          margin-top: 20px;
        }
      }
    }
    .OurTestimonial_bg {
      margin-top: 30px;
      .OurTestimonial {
        position: relative;
        padding-top: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
        .OurTestimonial_precursor {
          font-size: 18px;
          letter-spacing: -0.9px;
        }
        .OurTestimonial_title {
          font-size: 30px;
          letter-spacing: -1.5px;
        }
        .OurTestimonial_text {
          font-size: 12px;

          letter-spacing: -0.6px;
        }
        .OurTestimonial_bottom {
          margin-top: 90px;
          height: 100%;

          .bottom_bg {
            position: relative;
            width: 100%;
            height: 100%;
            padding-top: 70px;
            padding-bottom: 40px;
            background: rgba(30, 30, 34, 0.8);
            .out_img {
              position: absolute;
              top: -80px;
              left: 50%;
              transform: translate(-50%);
              width: 262px;
            }
            .OurTestimonial_bottom_z {
              .carousel {
                gap: 12px;
                .left-arrow,
                .right-arrow {
                  width: 25px;
                  height: 25px;
                }
              }
              .carousel-content {
                text-align: center;
                margin: 0 0px;
                .carousel_title {
                  font-size: 20px;
                  letter-spacing: -1px;
                  margin-bottom: 12px;
                }

                .carousel_text {
                  font-size: 12px;
                  letter-spacing: 0.6px;
                }
              }
            }
            .down {
              width: 100%;
              margin-top: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
