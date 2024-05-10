// const withTM = require('next-transpile-modules')(['antd']);

// module.exports = withTM({
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       // only compile Less files on the client side
//       config.module.rules.push({
//         test: /\.less$/,
//         use: [
//           { loader: 'style-loader' },
//           { loader: 'css-loader', options: { importLoaders: 1 } },
//           {
//             loader: 'less-loader',
//             options: {
//               lessOptions: {
//                 javascriptEnabled: true,
//                 modifyVars: {
//                   '@primary-color': '#1DA57A', // Customize Ant Design theme here
//                 },
//               },
//             },
//           },
//         ],
//       });
//     }
//     return config;
//   },
// });
