export default {
  items: [
    {
      title: true,
      name: 'Meals',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Homemade',
      url: '/homemademeal',
      icon: 'icon-drop',
    },
    {
      name: 'Outside',
      url: '/outsidemeal',
      icon: 'icon-pencil',
    },
  ],
};
