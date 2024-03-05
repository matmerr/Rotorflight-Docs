/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    //    'Tuning/intro',
        {
          "collapsible": true,
          "collapsed": true,
          type: 'category',
          label: 'Quickstart',
          items: [
            {
            type: 'autogenerated',
            dirName: 'Tutorial-Quickstart', // Generate sidebar slice from docs/tutorials/easy
            },
          ],
        },
        {
          "collapsible": true,
          "collapsed": true,
          type: 'category',
          label: 'Setup',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Tutorial-Setup', // Generate sidebar slice from docs/tutorials/easy
            },
          ],
        },
        {
          "collapsible": true,
          "collapsed": true,
          type: 'category',
          label: 'Walkthroughs',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Tutorial-Walkthroughs', // Generate sidebar slice from docs/tutorials/easy
            },
          ],
        },
      ],
  manufactSidebar: [
    {
      type: 'category',
      label: 'Manufacturers',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Manufacturers', // Generate sidebar slice from docs/tutorials/easy
        },
      ],
    },
  ],
  tuningSidebar: [
    {
      type: 'category',
      label: 'Tuning',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Tuning', // Generate sidebar slice from docs/tutorials/easy
        },
      ],
    },
  ],
  developSidebar: [
    {
      type: 'category',
      label: 'Contributing',
      items: [
        {
          type: 'autogenerated',
          dirName: 'Contributing', // Generate sidebar slice from docs/tutorials/easy
        },
      ],
    },
  ],
};

module.exports = sidebars;
