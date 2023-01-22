gsap.fromTo('#constructionText', {fill: 'black'}, {fill: 'white', duration: 1, delay: 1.3})
gsap.to('body', {backgroundColor: '#3e3e3e', duration: 1, delay: 1.3}) 
gsap.fromTo('#secondLine', {scale:0}, {scale:1, duration: 1});
gsap.to('.line', {fill: '#1434A4', duration: 1})