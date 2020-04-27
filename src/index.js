import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
 
// Для deploy:
// https://create-react-app.dev/docs/deployment/


// ReactDOM.render(
//   <Profile
//     name={user.name}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.getElementById('root'),
// );


// .prettierrc {
//   "printWidth": 80,
//   "tabWidth": 2,
//   "useTabs": false,
//   "semi": true,
//   "singleQuote": true,
//   "trailingComma": "all",
//   "bracketSpacing": true,
//   "jsxBracketSameLine": false,
//   "arrowParens": "avoid",
//   "proseWrap": "always"
// }
//  .lintstagedrc {
//   "src/**/*.{json,css,scss,md}": ["prettier --write", "git add"],
//   "src/**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix", "git add"]
// }
// video по Linter
// http://fecore.net.ua/books/rq7s2k-react/lesson-03/
// https://app.schoology.com/page/2179321672
// https://www.youtube.com/watch?v=j25TVuFQntA&feature=youtu.be
