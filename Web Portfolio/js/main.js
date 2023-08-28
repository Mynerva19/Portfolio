        
          const navBar = document.querySelector('nav');
          const mainBar = document.querySelector('main');
          
          const navHeight = navBar.offsetHeight;

          mainBar.style.marginTop = navHeight + 'px'
          const words = [
  'HtmL', 'CSS', 'JavascripT', 'PHP', 'Visual Studio C#', 'JavA'
];

const typewriter = document.getElementById('typewriter');

function typeWord(word, index, callback) {
  if (index < word.length) {
    typewriter.textContent += word.charAt(index);
    setTimeout(() => {
      typeWord(word, index + 1, callback);
    }, 200);
  } else {
    setTimeout(() => {
      callback();
    }, 1000); // Delay before deleting the word and typing the next one
  }
}

function deleteWord(index, callback) {
  const currentText = typewriter.textContent;
  if (currentText.length > 0) {
    typewriter.textContent = currentText.slice(0, -1);
    setTimeout(() => {
      deleteWord(index, callback);
    }, 100);
  } else {
    setTimeout(() => {
      callback();
    }, 500); // Delay before typing the next word
  }
}

function typeWords(wordsArray, index) {
  const currentIndex = index % wordsArray.length;
  const currentWord = wordsArray[currentIndex];
  
  typeWord(currentWord, 0, () => {
    deleteWord(currentIndex, () => {
      typeWords(wordsArray, currentIndex + 1);
    });
  });
}

typeWords(words, 0);



    // Get the element where you want to display the scroll value

    // Function to update the scroll value
function aboutme() {
    window.scrollTo({
        top: 794.4000244140625,
        behavior: 'smooth', // You can remove this line if you want instant scrolling without smooth animation
    });
}
    function updateScrollValue() {
        // Get the vertical scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        designScroll({

            id: 'slide-btn',
            css:{
                control: scrollTop,
                target: 80,
                True: {
                    transform: 'rotate(0deg)',
                    top: '90%'
                },
                False: {
                    top: '-1000px',
                    transform: 'rotate(180deg)',
                }

            }
        });
        designScroll({
            id: 'about_me',
            css:{
                control: scrollTop,
                target: 250,
                True: {
                    left: '0'
                },
                False: {
                    left: '-1000px',
                }

            }
        });
        designScroll({
            id: 'about_title',
            css:{
                control: scrollTop,
                target: 200,
                transition: 1,
                True: {
                    opacity: '1'
                },
                False: {
                    opacity: '0',
                }

            }
        });
        designScroll({
          id: 'progress_group',
          css:{
              control: scrollTop,
              target: 200,
              transition: 1,
              True: {
                opacity: 1
              },
              False: {
                opacity: 0
              }

          }
      });
      personal
      designScroll({
        id: 'personal',
        css:{
            control: scrollTop,
            target: 844,
            transition: 1,
            True: {
            left: '0'
            },
            False: {
                left: '-3000px',
            }

        }
    });
      designScroll({
        id: 'proj',
        css:{
            control: scrollTop,
            target: 1206.4000244140625,
            transition: 1,
            True: {
            left: '0'
            },
            False: {
                left: '-3000px',
            }

        }
    });

      designScroll({
        id: 'progress_html',
        
            Function: function(id) {
                if(scrollTop > 200) {
                  id.value = 100
                }
                else {
                  id.value = 0
                }
            }

    
    });
    designScroll({
      id: 'progress_js',
      
          Function: function(id) {
              if(scrollTop > 200) {
                id.value = 70
              }
              else {
                id.value = 0
              }
          }

  
  });
  designScroll({
    id: 'progress_css',
    
        Function: function(id) {
            if(scrollTop > 200) {
              id.value = 90
            }
            else {
              id.value = 0
            }
        }


});
designScroll({
  id: 'progress_other',
  
      Function: function(id) {
          if(scrollTop > 200) {
            id.value = 50
          }
          else {
            id.value = 0
          }
      }


});
        console.log(scrollTop)
    }

    document.getElementById('check_scroll').addEventListener("scroll",function() {
      
      const scrollTop = this.scrollTop;
      console.log(scrollTop)

    })
    function designScroll(style) {
          element = document.getElementById(style.id)
        
        if(style.css!==undefined ) {
        if (style.css.control > style.css.target) {
            if (element) {
                Object.keys(style.css.True).forEach((prop) => {
                    element.style[prop] = style.css.True[prop];
                });
            }
        } else {
            if (element) {
                Object.keys(style.css.False).forEach((prop) => {
                    element.style[prop] = style.css.False[prop];
                });
            }
        }
      }
      else {
        if(style.Function!==undefined) {
          style.Function(element);
        }
      }
    }
    
    // Attach the updateScrollValue function to the 'onscroll' event of the window
    window.onscroll = updateScrollValue;

    // Initial call to display the scroll value on page load
    updateScrollValue();
    function scrollToTop() {
        // Scroll to the top of the page (0, 0) with a smooth animation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    document.getElementById('Barangay').addEventListener("mouseenter",function() {
      this.addEventListener("click",function() { 
        window.open('http://bcwbms.infinityfreeapp.com/bcwbms_ci/Home/Home', '_blank');

      })
    })
    document.getElementById('booking').addEventListener("mouseenter",function() {
      this.addEventListener("click",function() { 
        window.open('http://localhost:5500/booking_system', '_blank');

      })
    })

    let selectorEducation = document.querySelectorAll('.group-timeline');
    let activeElement = null;
    
    let educ = [
      ['Elementary','Adriatico Memorial School'],
      ['HighSchool','Oriental Mindoro National HighSchool'],
      ['College','City College of Calapan - Bachelor Science in Information System']
    ]

    for (let i = 0; i < selectorEducation.length; i++) {
      selectorEducation[i].addEventListener('click', function() {
        document.querySelector('#Stage_school').innerHTML = educ[i][0]
        
        document.querySelector('#school').innerHTML = educ[i][1]
        if (activeElement !== null) {
          activeElement.classList.remove('active-tl');
        }

        this.classList.add('active-tl');
        activeElement = this;
      });
    }