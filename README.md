# x-bulow.github.io

Zefeng Cheng 的学术个人主页，基于 [Astro](https://astro.build) 构建，推送到 `main` 后由 GitHub Actions 自动部署到 <https://x-bulow.github.io>。

网站有两套皮肤：默认是普通学术风格（浅色，跟随系统深色模式）；点右上角的「Rusty Lake」按钮切换成锈湖风格（默认深色「夜湖」，可切成「旧纸张」浅色）。选择会记在浏览器里。锈湖皮肤的字体为 Old Standard TT（标题）、Crimson Pro（正文）、Special Elite（打字机风格的日期、标签和导航）。

## 本地预览

```bash
npm install
npm run dev      # http://localhost:4321，草稿笔记也会显示
npm run build    # 构建到 dist/
```

## 改内容去哪里

| 内容 | 文件 |
| --- | --- |
| 姓名、职位、邮箱、照片、CV PDF、社交链接、导航 | `src/config.ts` |
| 首页个人简介 | `src/data/bio.md` |
| 研究兴趣 | `src/data/interests.ts` |
| News | `src/data/news.ts` |
| 论文 | `src/data/publications.ts` |
| CV 页（教育、经历、技能、奖项、报告、教学、服务） | `src/data/cv.ts` |
| 研究项目 / 软件 / 课程项目 | `src/content/research/*.md` |
| 笔记（Misc → Notes） | `src/content/notes/*.md` |
| Misc 下的其他页面（兴趣爱好等） | `src/content/misc/*.md` |
| 样式（颜色、字体、排版） | `src/styles/global.css` |
| 锈湖皮肤的装饰图案（方块、水波、乌鸦） | `src/components/Ornament.astro` |

- **照片**：放到 `public/images/`，在 `src/config.ts` 里设置 `photo: '/images/xxx.jpg'`，没设置时显示首字母头像。锈湖皮肤下照片会显示在椭圆相框里并加一点怀旧色调；不想要色调就删掉 `global.css` 里 `[data-skin='lake'] .portrait img` 的 `filter` 一行。
- **CV PDF**：放到 `public/cv/`，设置 `cvPdf`，CV 页就会出现下载按钮。CV 页也可以直接用浏览器打印成 PDF。
- **研究项目**：Markdown 正文不为空时会生成详情页；`featured: true` 的项目会出现在首页。
- **Misc**：导航栏的 Misc 页列出 Notes 和 `src/content/misc/` 下的所有页面。要加一个兴趣爱好页，复制 `src/content/misc/interests.md`，改好内容后把 `draft` 改成 `false`。
- **笔记**：复制 `src/content/notes/example-note.md`，把 `draft` 改成 `false` 后发布。
- **可选模块**：奖项、报告、教学、服务等列表为空时不显示，往 `src/data/cv.ts` 里加条目就会出现。
