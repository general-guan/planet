import { Input, Button, Space } from "antd";
import { ipcRenderer } from "electron";

const json = [
  {
    title: "AI",
    sites: [
      {
        name: "秘塔 AI",
        url: "https://metaso.cn",
      },
      {
        name: "AIchatOS",
        url: "https://x.aichatos8.cn",
      },
    ],
  },
  {
    title: "CSS",
    sites: [
      {
        name: "Tailwind CSS",
        url: "https://www.tailwindcss.cn",
      },
    ],
  },
  {
    title: "Vue",
    sites: [
      {
        name: "Vue",
        url: "https://cn.vuejs.org",
      },
      {
        name: "Vue Router",
        url: "https://router.vuejs.org/zh",
      },
      {
        name: "Pinia",
        url: "https://pinia.vuejs.org/zh",
      },
      {
        name: "Nuxt",
        url: "https://nuxt.com.cn",
      },
      {
        name: "VueUse",
        url: "https://www.vueusejs.com",
      },
      {
        name: "Element Plus",
        url: "https://element-plus.org/zh-CN",
      },
      {
        name: "Element UI",
        url: "https://element.eleme.cn/#/zh-CN",
      },
      {
        name: "Vant",
        url: "https://vant-ui.github.io/vant/#/zh-CN",
      },
    ],
  },
  {
    title: "React",
    sites: [
      {
        name: "React",
        url: "https://zh-hans.react.dev",
      },
      {
        name: "React Router",
        url: "https://reactrouter.com/en/main",
      },
      {
        name: "Next",
        url: "https://nextjs.org",
      },
      {
        name: "Zustand",
        url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
      {
        name: "React Native",
        url: "https://reactnative.dev",
      },
      {
        name: "React TypeScript",
        url: "https://react-typescript-cheatsheet.netlify.app",
      },
      {
        name: "AntD",
        url: "https://ant-design.antgroup.com/index-cn",
      },
    ],
  },
  {
    title: "Node",
    sites: [
      {
        name: "Node",
        url: "https://nodejs.cn",
      },
      {
        name: "Express",
        url: "https://expressjs.com",
      },
      {
        name: "Nest",
        url: "https://nestjs.com",
      },
      {
        name: "Bun",
        url: "https://bun.sh",
      },
    ],
  },
  {
    title: "构建工具",
    sites: [
      {
        name: "Vite",
        url: "https://cn.vitejs.dev",
      },
      {
        name: "Webpack",
        url: "https://webpack.docschina.org",
      },
    ],
  },
  {
    title: "测试框架",
    sites: [
      {
        name: "Vitest",
        url: "https://cn.vitest.dev",
      },
    ],
  },
  {
    title: "静态站点生成器",
    sites: [
      {
        name: "VitePress",
        url: "https://vitepress.dev/zh",
      },
      {
        name: "Docusaurus",
        url: "https://docusaurus.io/zh-CN",
      },
    ],
  },
  {
    title: "学习",
    sites: [
      {
        name: "MDN",
        url: "https://developer.mozilla.org/zh-CN",
      },
      {
        name: "现代 JavaScript 教程",
        url: "https://zh.javascript.info",
      },
      {
        name: "网道",
        url: "https://wangdoc.com",
      },
      {
        name: "ES6 教程",
        url: "https://es6.ruanyifeng.com",
      },
      {
        name: "书栈网",
        url: "https://www.bookstack.cn",
      },
    ],
  },
  {
    title: "编码练习",
    sites: [
      {
        name: "30 天练习 JavaScript",
        url: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
      },
      {
        name: "TS 类型体操",
        url: "https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md",
      },
      {
        name: "Vue.js 挑战",
        url: "https://cn-vuejs-challenges.netlify.app",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.cn",
      },
    ],
  },
  {
    title: "工具",
    sites: [
      {
        name: "Upnet",
        url: "https://upnet005.vip/#",
      },
      {
        name: "极简插件",
        url: "https://chrome.zzzmh.cn/index",
      },
      {
        name: "Regex101",
        url: "https://regex101.com",
      },
      {
        name: "Snippet-Generator",
        url: "https://snippet-generator.app",
      },
      {
        name: "Transform",
        url: "https://transform.tools/",
      },
    ],
  },
  {
    title: "设计",
    sites: [
      {
        name: "Scrollbar",
        url: "https://scrollbar.app",
      },
      {
        name: "Lucide",
        url: "https://lucide.dev",
      },
      {
        name: "Wallpaper Abyss",
        url: "https://wall.alphacoders.com",
      },
    ],
  },
  {
    title: "面试",
    sites: [
      {
        name: "开发者客栈-前端面试",
        url: "https://www.developers.pub/wiki/1065322",
      },
      {
        name: "前端面试题汇总",
        url: "https://www.yuque.com/cuggz/interview",
      },
    ],
  },
];

const openUrl = (url: string) => {
  ipcRenderer.send("openExternal", { url });
};

export const FavoriteSites = () => {
  return (
    <>
      <Input autoFocus />
      {json.map((item) => (
        <>
          <h3>{item.title}</h3>
          <Space wrap>
            {item.sites.map((site) => (
              <Button onClick={() => openUrl(site.url)}>{site.name}</Button>
            ))}
          </Space>
        </>
      ))}
    </>
  );
};
