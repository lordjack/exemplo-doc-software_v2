import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          { text: '1 - Introdução', link: '/1_introducao' },
          { text: '2 - Descrição Projeto', link: '/2_descricao_projeto' },
          { text: '4 - Principais Recursos', link: '/4_diagrama_caso_uso' },
          { text: '5 - Diagrama de Classe', link: '/5_diagrama_classe' },
          // ...
        ],
      },
    ],
  },
});
