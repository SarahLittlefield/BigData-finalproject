var config = {
    style: 'mapbox://styles/sarahlittlefield/ck8te4k3a02ge1js5dnrhp3pg',
    accessToken: 'pk.eyJ1Ijoic2FyYWhsaXR0bGVmaWVsZCIsImEiOiJjazhweTJldDEwY2lyM2VwYjlvaXZ4aWFtIn0.iIGhRcZ7BpTUZ7o6bWrqGg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Where in New York are People at Risk for Homelessness?',
    subtitle: 'A Scrollytelling Website',
    byline: 'Sarah Littlefield',
    footer: 'sources: Data-American Community Survey 5 year estimates, Text-https://ny.curbed.com/2018/10/12/17965416/nyc-rent-burden-households-affordable-housing',
    chapters: [
      {
          id: 'intro',
          title: 'This example scolling webiste demonstrates a series of maps related to rental affordability in New York City',
          image: '',
          description: '',
          location: {
            center: [-73.97271, 40.76674],
            zoom: 9.89,
            pitch: 48.00,
            bearing: 27.20
          },
          onChapterEnter: [
              {
                  layer: 'cd-shape-simple',
                  opacity: 1
              },
              {
                layer: 'cd-rent-burden',
                opacity: 0
              },
              {
                layer: 'cd-poverty-rate',
                opacity: 0
              }
          ],
          onChapterExit: [
            {
                layer: 'cd-shape-simple',
                opacity: 1
            },
            {
              layer: 'cd-rent-burden',
              opacity: 0
            },
            {
              layer: 'cd-poverty-rate',
              opacity: 0
            }
          ]
      },
        {
            id: 'into-rent-burden',
            title: 'Rent Burden in New York City',
            image: 'https://wp.zillowstatic.com/streeteasy/2/3-Rent-and-Income-Growth-01-6e7ca3.png',
            description: 'Families should pay no more than 30 percent of their income for rent according to housing advocates. Many public agencies set their support levels to meet this standard. Unfortunately, we find that across New York State, and in some of its major cities, significant shares of families are paying more than 30 percent of their income in rent. Severe rent burdens can badly reduce families’ ability to pay for other important expenses, such as food or transportation, and can limit both adults’ and children’s opportunities for education and recreation according to housing advocates.',
            location: {
              center: [-73.97271, 40.76674],
              zoom: 9.89,
              pitch: 48.00,
              bearing: 27.20
            },
            onChapterEnter: [
                {
                    layer: 'cd-shape-simple',
                    opacity: 1
                },
                {
                  layer: 'cd-rent-burden',
                  opacity: 0
                },
                {
                  layer: 'cd-poverty-rate',
                  opacity: 0
                }
            ],
            onChapterExit: [
              {
                  layer: 'cd-shape-simple',
                  opacity: 1
              },
              {
                layer: 'cd-rent-burden',
                opacity: 1
              },
              {
                layer: 'cd-poverty-rate',
                opacity: 0
              }
            ]
        },
        {
            id: 'rent-burden-1',
            title: 'Average percent of income spent on rent',
            image: '',
            description: '44% of all New York households are rent burdened, and there appears to be some spatial concentrations',
            location: {
              center: [-73.97271, 40.76674],
              zoom: 9.89,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'cd-shape-simple',
                    opacity: 1
                },
                {
                  layer: 'cd-rent-burden',
                  opacity: 1
                },
                {
                  layer: 'cd-poverty-rate',
                  opacity: 0
                }
            ],
            onChapterExit: [
              {
                  layer: 'cd-shape-simple',
                  opacity: 1
              },
              {
                layer: 'cd-rent-burden',
                opacity: 0
              },
              {
                layer: 'cd-poverty-rate',
                opacity: 0
              }
            ]
        },
        {
            id: 'poverty-rate',
            title: 'Percent of families living below the poverty line',
            image: '',
            description: 'It appears there may be a relationship between poverty and rent-burdened households in New York. A study by the non-profit watchdog group, Citizens Budget Commission found 91 percent of severely rent-burdened households are low-income New Yorkers.',
            location: {
              center: [-73.97271, 40.76674],
              zoom: 9.89,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'cd-shape-simple',
                    opacity: 1
                },
                {
                  layer: 'cd-rent-burden',
                  opacity: 0
                },
                {
                  layer: 'cd-poverty-rate',
                  opacity: 1
                }
            ],
            onChapterExit: [
              {
                  layer: 'cd-shape-simple',
                  opacity: 1
              },
              {
                layer: 'cd-rent-burden',
                opacity: 0
              },
              {
                layer: 'cd-poverty-rate',
                opacity: 1
              }
            ]
        },
        {
            id: 'poverty-rate-2',
            title: '',
            image: 'https://www.pewtrusts.org/-/media/data-visualizations/infographics/2018/04/rent-burden-report/rent-burden_fig-5_650px.png?la=en&hash=522D189605FAFBD12884224ECFF5F531EF2015BA',
            description: 'Many advocates are calling on Mayor Bill DeBlasio to construct affordable units, and he has promised to create or preserve 300,000 affordable units by 2026, however many say this is not enough.',
            location: {
              center: [-73.97271, 40.76674],
              zoom: 9.89,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'cd-shape-simple',
                    opacity: 1
                },
                {
                  layer: 'cd-rent-burden',
                  opacity: 0
                },
                {
                  layer: 'cd-poverty-rate',
                  opacity: 1
                }
            ],
            onChapterExit: [
              {
                  layer: 'cd-shape-simple',
                  opacity: 1
              },
              {
                layer: 'cd-rent-burden',
                opacity: 0
              },
              {
                layer: 'cd-poverty-rate',
                opacity: 0
              }
            ]
        },
        {
            id: 'conclusion',
            title: 'Next Steps',
            image: '',
            description: 'We hope going forward to connect these two variables - poverty and rental burden to homelessness. We hope to show possible risk factors for homelessness, as a way to explore possible preventative measures.',
            location: {
              center: [-73.99431, 40.71314],
              zoom: 10.42,
              pitch: 42.00,
              bearing: 17.60
            },
            onChapterEnter: [
                {
                    layer: 'cd-shape-simple',
                    opacity: 1
                },
                {
                  layer: 'cd-rent-burden',
                  opacity: 0
                },
                {
                  layer: 'cd-poverty-rate',
                  opacity: 0
                }
            ],
            onChapterExit: [
              {
                  layer: 'cd-shape-simple',
                  opacity: 1
              },
              {
                layer: 'cd-rent-burden',
                opacity: 0
              },
              {
                layer: 'cd-poverty-rate',
                opacity: 0
              }
            ]
        }
    ]
}
