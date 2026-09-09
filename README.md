# 經濟學原理與實習 · AI TA 使用入口

公開網站：<https://danieltsai2026.github.io/econ-principles-ta-pages/>

這個 repository 僅提供學生使用入口。完整 TA 教材保留在私人 repository [econ-principles-ta](https://github.com/DanielTsai2026/econ-principles-ta)，需取得存取權後下載。網站本身不提供 AI 聊天。

## 部署

依 EduSpec `PUBLISH-GITHUB-IO.md` 的 GitHub Pages 分支發布方式：Settings → Pages → Deploy from a branch → `main` / `/ (root)`。

- `index.html`：學生入口、提問指令與教材導覽。
- `styles.css`：桌面與手機版樣式。
- `app.js`：複製提問指令，無外部服務或持久儲存。
- `.nojekyll`：直接提供靜態檔案。

修改後提交並推送 `main`，GitHub Pages 會重新發布。不要將完整課程教材、原始素材、私人報告或登入憑證複製到這個公開 repository。

目前 TA 為待驗收草稿；網站不表示教師審閱或教學對話驗收已完成。
