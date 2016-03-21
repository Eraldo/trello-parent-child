var HandsomeTrello = {
  plugins: {},

  callbacks: {
    cardsUpdated: {},
    openCardViewed: {},
    checklistInserted: {},
    checkItemUpdated: {},
    badgeChecklistUpdated: {}
  },

  settings: {
    plugins: {
      'inheritance': true
    },
    popOver: {
      offset: 6,
      resizeTimeout: 100
    },
    reloadTimeout: 500,
    updateBadgeChecklistTimeout: 500,
    notification: {
      defaultTimeout: 10000,
      messages: {
        recursionOnBoard: function (recursionCardTitle, recursionCardLink, currentCardTitle, currentCardLink) {
          return HandsomeTrello.jsonToDOM(['span', {},
              ['a', {
                'href': recursionCardLink
              },
                recursionCardTitle
              ],
              ' is not a child for ',
              ['a', {
                'href': currentCardLink
              },
                currentCardTitle
              ],
              ' anymore, due to fix for cycle Parent/Child dependency'
          ]);
        },
        severalParentsOnCard: function (recursionCardTitle, recursionCardLink, currentCardTitle, currentCardLink) {
          return HandsomeTrello.jsonToDOM(['span', {},
              ['a', {
                'href': recursionCardLink
              },
                recursionCardTitle
              ],
              ' is not a child for ',
              ['a', {
                'href': currentCardLink
              },
                currentCardTitle
              ],
              ' anymore, due to fix for multiple Parents dependency'
          ]);
        }
      }
    },

    options: {
      openChildCard: {
        title: 'Open Child Card after adding',
        type: 'boolean',
        value: true
      },
      showArchivedCards: {
        title: 'Show Archived Cards in children and related lists',
        type: 'boolean',
        value: true
      }
    }
  }
};
