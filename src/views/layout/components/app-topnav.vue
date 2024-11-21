<script lang="ts" setup name="AppTopnav">
import { useWindowWidth } from '@/utils/useWindowSize'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const width = useWindowWidth()
const NavList = ref([
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'About Us',
    path: '/aboutUs'
  },
  {
    label: 'Services',
    path: '/services'
  },
  {
    label: 'Our Work',
    path: '/ourWork'
  },
  {
    label: 'Packages',
    path: '/packages'
  }
])
const route = useRoute()
const isActive = (path: string) => {
  return route.path === path
}
</script>
<template>
  <nav class="app-topnav">
    <div class="bg">
      <div class="container">
        <router-link class="top_left" to="/"
          ><img src="@/assets/images/logo.png" alt=""
        /></router-link>

        <div class="top_right" v-if="width > 834">
          <div class="top_right_nav">
            <!-- 利用 Vue Router 提供的 router-link-active 类，根据切换的导航栏来简单改变颜色 -->
            <router-link
              v-for="item in NavList"
              :key="item.label"
              :to="item.path"
              class="nav"
              exact-active-class="active-link"
              >{{ item.label }}</router-link
            >
          </div>
          <div class="line"></div>
          <div class="top_right_Email">
            <div class="Email_icon">
              <img src="@/assets/svgs/call.svg" alt="" />
            </div>
            <div class="Email">
              <div class="Email_title">EMAIL US AT</div>
              <div class="Email_text">ABC@ABC.COM</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="top_right_Chat">
            <div class="Chat_icon">
              <img src="@/assets/svgs/chat.svg" alt="" />
            </div>
            <div class="Chat">
              <div class="Chat_title">CLICK HERE TO</div>
              <div class="Chat_text">Live Chat</div>
            </div>
          </div>
          <div class="top_right_btn">Get In Touch</div>
        </div>
        <el-dropdown
          placement="bottom"
          v-if="width < 835"
          class="dropdown"
          :popper-append-to-body="false"
          :hide-on-click="true"
        >
          <img
            src="@/assets/svgs/Sidebar.svg"
            alt=""
            style="width: 24px; height: 24px"
          />
          <template #dropdown>
            <el-dropdown-menu class="dropdown_menu">
              <el-dropdown-item
                v-for="item in NavList"
                :key="item.label"
                :class="{ active: isActive(item.path) }"
                ><router-link
                  :to="item.path"
                  exact-active-class="active-link"
                  class="dropdown_link"
                >
                  {{ item.label }}
                </router-link></el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="less">
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}
.el-dropdown-menu {
  background: #50251f;
  border: none;
}
.dropdown_link {
  color: #fff;
}
.active-link {
  color: #fb653c;
}

:global(.el-popper.is-light) {
  border: 1px solid #1e1e22 !important;
}

.app-topnav {
  width: 100%;
  background: #1e1e22;

  // min-height: 172px;
  min-height: 112px;
}
.bg {
  background: linear-gradient(
    to right,
    rgba(251, 101, 60, 0.27) 0%,
    rgba(251, 101, 60, 0) 50%
  );
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  .top_left {
    display: flex;
    align-items: center;
    width: 380px;
  }
  .top_right {
    margin-right: 10px;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;

    .top_right_nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      height: 100%;

      .nav {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        color: #fff;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -1px;
      }
      .active-link {
        color: #fb653c;
      }
    }
    .line {
      width: 1px;
      height: 19px;
      background: #3e3e41;
      margin-left: 22px;
      margin-right: 10px;
    }
    .top_right_Email {
      display: flex;
      align-items: center;
      height: 100%;
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
    .top_right_Chat {
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

    .top_right_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 169px;
      height: 48px;
      flex-shrink: 0;
      border-radius: 24px;
      background: #fb653c;
      margin-left: 60px;
      color: #fff;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1px;
    }
  }
}
@media (max-width: 1820px) {
  .app-topnav {
    .container {
      padding: 0 70px;
    }
  }
}
@media (max-width: 1760px) {
  .app-topnav {
    .container {
      padding: 0 50px;
      .top_left {
        width: 280px;
      }
      .top_right {
        .top_right_nav {
          gap: 20px;
        }
        .line {
          margin-left: 10px;
          margin-right: 10px;
        }
        .top_right_btn {
          margin-left: 30px;
        }
      }
    }
  }
}

@media (max-width: 1574px) {
  .app-topnav {
    .container {
      padding: 0 30px;
      .top_left {
        width: 250px;
      }
      .top_right {
        .top_right_nav {
          gap: 20px;
        }
        .top_right_btn {
          width: 150px;
          height: 42px;
          border-radius: 20px;
          margin-left: 30px;
          font-size: 18px;

          font-weight: 600;
        }
      }
    }
  }
}
@media (max-width: 1396px) {
  .app-topnav {
    .container {
      padding: 0 10px;
      .top_left {
        width: 240px;
      }
      .top_right {
        .top_right_nav {
          gap: 10px;
        }
        .line {
          width: 1px;
          height: 19px;
          background: #3e3e41;
          margin-left: 10px;
          margin-right: 10px;
        }
        .top_right_btn {
          width: 130px;
          height: 36px;
          border-radius: 16px;
          margin-left: 15px;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
}
@media (max-width: 1281px) {
  .app-topnav {
    .container {
      padding: 0 10px;
      .top_left {
        width: 230px;
      }
      .top_right {
        margin-right: 10px;
        .top_right_nav {
          gap: 0px;
          .nav {
            padding: 0 15px;
          }
        }
        .line {
          width: 1px;
          height: 19px;
          background: #3e3e41;
          margin-left: 8px;
          margin-right: 8px;
        }
        .top_right_btn {
          width: 100px;
          height: 30px;
          border-radius: 16px;
          margin-left: 10px;
          font-size: 14px;
          font-weight: 500;
        }
        .top_right_Email,
        .top_right_Chat {
          gap: 5px;
        }
      }
    }
  }
}
@media (max-width: 1128px) {
  .app-topnav {
    .container {
      padding: 0 10px;
      .top_left {
        width: 220px;
      }
      .top_right {
        margin-right: 10px;
        .top_right_nav {
          gap: 0px;
          .nav {
            padding: 0 12px;
            font-size: 16px;
          }
        }
        .line {
          width: 1px;
          height: 19px;
          background: #3e3e41;
          margin-left: 0px;
          margin-right: 3px;
        }
        .top_right_btn {
          width: 80px;
          height: 26px;
          border-radius: 16px;
          margin-left: 0px;
          font-size: 12px;
          font-weight: 500;
        }
        .top_right_Email,
        .top_right_Chat {
          gap: 5px;
          margin-right: 8px;
        }
      }
    }
  }
}
@media (max-width: 958px) {
  .app-topnav {
    .container {
      padding: 0 10px;
      .top_left {
        width: 160px;
      }
      .top_right {
        margin-right: 10px;
        .top_right_nav {
          gap: 0px;
          .nav {
            padding: 0 10px;
            font-size: 14px;
          }
        }
        .line {
          width: 1px;
          height: 19px;
          background: #3e3e41;
          margin-left: 0px;
          margin-right: 3px;
        }
        .top_right_btn {
          width: 76px;
          height: 22px;
          border-radius: 16px;
          margin-left: 0px;
          font-size: 10px;
          font-weight: 500;
        }
        .top_right_Email,
        .top_right_Chat {
          gap: 5px;
          margin-right: 8px;
        }
        .top_right_Email {
          .Email_icon {
            width: 24px;
          }
          .Email {
            .Email_text {
              font-size: 10px;
            }
          }
        }
        .top_right_Chat {
          .Chat_icon {
            width: 16px;
          }
          .Chat {
            .Chat_text {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 834px) {
  .app-topnav {
    .bg {
      background: linear-gradient(
        to right,
        rgba(251, 101, 60, 0.27) 0%,
        rgba(251, 101, 60, 0) 100%
      );
    }
    min-height: 80px;
    .container {
      padding: 0 20px;
      .top_left {
        width: 240px;
      }
    }
  }
}
</style>

<style lang="less">
.el-dropdown-menu {
  background: linear-gradient(
    to right,
    rgba(251, 101, 60, 0.27) 0%,
    rgba(251, 101, 60, 0) 50%
  );
  width: 100px;
  display: flex;
  flex-direction: column;

  align-items: center;
}
.el-popper.is-light {
  border: 1px solid #1e1e22 !important;
}
.el-popper.is-light .el-popper__arrow::before {
  background: #1e1e22 !important;
}
.el-popper.is-light .el-popper__arrow::before {
  border: 1px solid #1e1e22 !important;
}

.active {
  background: rgba(217, 217, 217, 0.1);
  border-radius: 3px;
  color: #fb653c;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
}
.el-dropdown-menu__item {
  &:hover {
    width: 90px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(217, 217, 217, 0.1);
    color: #fb653c;
  }
}
.el-popper {
  border-radius: 5px !important;
  background: #1e1e22;
}
.is-light {
  background: #1e1e22 !important;
}
</style>
