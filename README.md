<h1 align="center">My Portfolio Site</h1>

<p align="center">
  <strong>
    <a href="https://oonawa-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img src="https://images.microcms-assets.io/assets/286786326ac4469587af976e633a89ad/1792b737edc44c378323db55aa2b9fc5/2026-01-30%2011.53%E3%81%AE%E7%94%BB%E5%83%8F.png" alt="">
    </a>
  </strong>
</p>

oonawaが2023年〜2025年までに公開・更新していたポートフォリオサイトです。
microCMS, Astro, Reactを使用した静的サイトをVercelへデプロイする構成になっています。

## ページ構成

- トップ（サイト内メニュー / ソーシャルアカウントへのリンク）
- About（簡単な自己紹介）
- Blogs（残したいこと, お知らせなどのブログ一覧）
- Experiences（Zenn / 本サイトのRSSフィード）

## アプリケーション構成

- Astro v5
- React v18
- TailwindCSS v3
- TypeScript v5
- Biome v1
- Prettier v3

## システム構成

### CMS

以下のコンテンツ管理にmicroCMSを使用しています。

- ブログ記事
- プロフィール（自己紹介文 / SNSアカウント一覧）
- 取得するRSSフィードのURL一覧
- トップのメニューに使用する画像

### サーバー

Vercelへホスティングしています。

### データベース

一部データのキャッシュにUpstashを使用しています。

> 👉RSSフィードから抽出したタイトル・URLなど

## ライセンス

[MITライセンス](https://opensource.org/licenses/MIT)で公開しています。
