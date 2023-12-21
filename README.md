# Qsearch-Frontend-Intern

此為應徵 Qsearch 的 Front-end Intern 作業

---

#### 1. 在調整 CSS 格式時，如何盡可能不用 !important ，來覆寫原有樣式？

CSS 選擇器權重:
| 選擇器 | 分數 | 範例 |
| ------------ | ------ | ----------------------------------------------------- |
| `!important` | 10,000 | `color: red !important;` |
| 行內樣式 | 1,000 | `<p style="font-size: 20px;">hello world</p>` |
| ID 選擇器 | 100 | `#header { background-color: black; }` |
| class 選擇器 | 10 | `.button { padding: 10px; }` |
| 屬性選擇器 | 10 | `input[type="text"] { border: 1px solid lightgray; }` |
| 偽類選擇器 | 10 | `a:hover { color: blue; }` |
| 型態選擇器 | 1 | `p { font-size: 20px; }` |
| 偽元素選擇器 | 1 | `p::first-line { font-size: 20px; }` |
| 通用選擇器 | 0 | `* { color: red; }` |

可以透過提高 CSS 選擇器的特定性，來避免使用 `!important`。像是 `#header .button`(100+10) 就比 `.button`(10) 高，CSS 會採用較高的分數。

除此之外，在開發上有幾點要注意

- CSS 的順序:後面寫的 CSS 會覆蓋前面的 CSS
- 盡量使用 ID 或 class 選擇器，權重性較高
- 寫一個更具體的選擇器，來覆蓋父元素繼承的樣式
- 避免使用通用選擇器 \* ，或是在 body 使用 CSS
- 簡化 html 的架構，避免不必要的嵌套

#### 2. 為何 JS 開發會需要用到 Framework，像是 Angular, React, Vue.js … 等？

用 JS 開發遇到的問題:

- 手動操作 DOM: 在原生 JavaScript 中，當資料變動時，必須手動更新 DOM。如果專案比較大型或是複雜，就會很容易出錯。
- 專案沒有架構或模組化: 如果應用程式的規模擴大，維護上會更困難。特別是如果沒有將 JavaScript 模組化，一次要面對很多行的程式碼。

使用框架的好處:

- Component & 模組化 : 透過 Framework，使用者可以將不同的組件拆分成不同的 Component。
- 資料和畫面分離 : 當資料更新後，Framework 會自動更新相對應的畫面，不用手動操作 DOM。
- 更好的開發者體驗 : 使用 JS 操作 DOM 的方法在維護上比較不容易，透過拆分的 Component 較容易找出問題。另外使用框架大家都是使用相同的邏輯概念，比較容易理解。
- 路由功能 : 在過去使用 JS 點選連結是需要瀏覽器和伺服器溝通，現在則是透過前端來處理，建立單頁應用程式（SPA）變得更容易，提供更好的使用者體驗。
- 效能優化 : 有些框架內建效能優化的功能，像是 Virtual DOM、 Code splitting（代碼分離）、Lazy loading 等。
- 生態系統 : 可以使用框架生態系統的第三方 library、工具等，開發上更有效率。
