<script lang="ts" setup name="AppFooter">
import { ref } from 'vue'
import { useWindowWidth } from '@/utils/useWindowSize'
const width = useWindowWidth()
const data = ref([
  {
    id: 1,
    title: 'All Services',
    length_left: 40,
    length_right: 82,
    item: [
      {
        text: 'Logo Design',
        link: ''
      },
      {
        text: 'Creative Copywriting',
        link: ''
      },
      {
        text: 'Website Development',
        link: ''
      },
      {
        text: 'Digital Marketing',
        link: ''
      },
      {
        text: 'Ecommerce Web Solutions',
        link: ''
      },
      {
        text: 'Motion Graphics',
        link: ''
      },
      {
        text: 'Illustration Design',
        link: ''
      },
      {
        text: 'Marketing Collateral',
        link: ''
      },
      {
        text: 'App Design',
        link: ''
      },
      {
        text: 'SEO Services',
        link: ''
      }
    ]
  },
  {
    id: 2,
    title: 'Quick Links',
    length_left: 40,
    length_right: 82,
    item: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: ''
      },
      {
        text: 'Portfolio',
        link: ''
      },
      {
        text: 'Contact Us',
        link: ''
      },
      {
        text: 'Packages',
        link: ''
      }
    ]
  },
  {
    id: 3,
    title: 'Contact Details',
    length_left: 62,
    length_right: 94,
    item: [
      {
        text: 'ABC@abc.com',
        link: ''
      },
      {
        text: '+1010101010',
        link: ''
      },
      {
        text: 'abc, abc, abc, USA',
        link: ''
      }
    ]
  }
])
</script>
<template>
  <footer class="app_footer">
    <div class="container">
      <div class="footer_left">
        <div class="logo"><img src="@/assets/images/logo.png" alt="" /></div>
        <div class="FOLLOW_US">
          <div class="FOLLOWUS_text">FOLLOW US :</div>
          <div class="FOLLOWUS_icons_father">
            <div class="FOLLOWUS_icons">
              <img src="@/assets/svgs/whatsapp.svg" alt="" />
              <img src="@/assets/svgs/youtube.svg" alt="" />
              <img src="@/assets/svgs/snapchat.svg" alt="" />
              <img src="@/assets/svgs/be.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="width > 834" class="footer_right">
        <div class="right_father" v-for="item in data" :key="item.id">
          <div class="footer_right_title">{{ item.title }}</div>
          <LINE
            :color="'#fff'"
            :length_left="item.length_left"
            :length_right="item.length_right"
          ></LINE>

          <div class="gap">
            <div
              class="footer_right_item"
              v-for="sub_item in item.item"
              :key="sub_item.text"
            >
              {{ sub_item.text }}
            </div>
          </div>
          <div v-if="item.id === 3" class="five_icons">
            <img src="@/assets/images/five_icons.png" alt="" />
          </div>
        </div>
      </div>
      <div v-if="width < 835" class="side_collapse">
        <el-collapse>
          <el-collapse-item
            v-for="item in data"
            :key="item.id"
            :title="item.title"
          >
            <div
              class="footer_right_item"
              v-for="sub_item in item.item"
              :key="sub_item.text"
            >
              {{ sub_item.text }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
.app_footer {
  overflow: hidden;
  background: #1e1e22;
  min-height: 530px;
}
.container {
  height: 100%;
  display: flex;
  justify-content: space-between;

  padding: 40px 100px;
  .footer_left {
    display: flex;
    flex-direction: column;
    .logo {
      width: 200px;
      margin-bottom: 80px;
    }
    .FOLLOW_US {
      display: flex;
      flex-direction: column;
      gap: 18px;
      .FOLLOWUS_icons_father {
        display: flex;
        .FOLLOWUS_icons {
          display: flex;
          gap: 16px;
        }
      }
      .FOLLOWUS_text {
        color: #fff;
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.9px;
      }
    }
  }
  .footer_right {
    display: flex;
    gap: 95px;
    .right_father {
      display: flex;
      flex-direction: column;
      .footer_right_title {
        color: #fb653c;
        font-family: Poppins;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -1.1px;
        margin-bottom: 4px;
      }
    }
    .gap {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: #fff;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.9px;
    }
    .five_icons {
      margin-top: 28px;
      width: 246px;
      height: 26px;
      flex-shrink: 0;
    }
  }
}
@media (max-width: 1140px) {
  .app_footer {
    .container {
      padding: 40px 50px;
      .footer_right {
        gap: 50px;
        .five_icons {
          margin-top: 28px;
          width: 176px;
          height: 26px;
          flex-shrink: 0;
        }
      }
    }
  }
}
@media (max-width: 900px) {
  .app_footer {
    .container {
      padding: 40px 20px;
      .footer_right {
        gap: 40px;
        .right_father {
          .footer_right_title {
            font-size: 20px;
          }
        }
        .gap {
          font-size: 14px;
        }
        .five_icons {
          margin-top: 28px;
          width: 176px;
          height: 26px;
          flex-shrink: 0;
        }
      }
    }
  }
}
@media (max-width: 834px) {
  .app_footer {
    overflow: visible;
    min-height: auto;

    .container {
      flex-direction: column;
      padding: 30px 20px;
      .footer_left {
        margin-bottom: 15px;
        .logo {
          width: 240px;
          margin-bottom: 8px;
        }
        .FOLLOW_US {
          flex-direction: row;
          gap: 8px;
          .FOLLOWUS_icons_father {
            .FOLLOWUS_icons {
              width: 16px;
              gap: 8px;
            }
          }
          .FOLLOWUS_text {
            font-size: 12px;
          }
        }
      }
      .side_collapse {
        border-top: 0.5px solid #565659;
        width: 100%;
        padding-top: 15px;
        .el-collapse {
          --el-collapse-border-color: rgba(217, 217, 217, 0.3);
          --el-collapse-header-bg-color: #1e1e22;
          border-top: none; /* 移除第一条的边框 */

          :deep(.el-collapse-item__header) {
            font-weight: 600;
            color: #f63;
            font-family: Poppins;
            font-size: 15px;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.75px;
            text-transform: capitalize;
          }
          :deep(.el-collapse-item__wrap) {
            background: #1e1e22;
          }
          :deep(.el-collapse-item__content) {
            padding-bottom: 12px;
            background: #1e1e22;

            display: flex;
            flex-direction: column;
            gap: 12px;
            color: #fff;
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.9px;
          }
        }
      }
    }
  }
}
</style>
