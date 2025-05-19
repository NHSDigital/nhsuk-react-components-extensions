/*
 * Lifted from nhsuk-frontend and brought into this repo to enable compilation to CJS if required
 * See Github issue https://github.com/nhsuk/nhsuk-frontend/issues/937
 */


class Header {
  constructor() {
    this.menuIsOpen = false;
    this.navigation = document.querySelector('.nhsuk-navigation');
    this.navigationList = document.querySelector('.nhsuk-header__navigation-list');
    this.mobileMenu = document.createElement('ul');
    this.mobileMenuToggleButton = document.querySelector('.nhsuk-header__menu-toggle');
    this.mobileMenuCloseButton = document.createElement('button');
    this.mobileMenuContainer = document.querySelector('.nhsuk-mobile-menu-container');
    this.breakpoints = [];
    this.width = document.body.offsetWidth;
    // this.widthDifference = this.width - this.navigation.offsetWidth
  }

  init() {
    if (
      !this.navigation ||
      !this.navigationList ||
      !this.mobileMenuToggleButton ||
      !this.mobileMenuContainer
    ) {
      return;
    }

    // this.prepareHeader = this.debounce(() => {
      this.setupMobileMenu()
      this.calculateBreakpoints();
      this.updateNavigation();
      this.doOnOrientationChange();
      // this.calculateBreakpoints();
      // this.updateNavigation();
    // });

    this.handleResize = this.debounce(() => {
      this.calculateBreakpointsAfterResize();
      this.updateNavigation();
    });

    // window.addEventListener('load', this.prepareHeader)
    this.mobileMenuToggleButton.addEventListener('click', this.toggleMobileMenu.bind(this));
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('orientationchange', this.doOnOrientationChange());
  }

  debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  /**
   * Calculate breakpoints.
   *
   * Calculate the breakpoints by summing the widths of
   * each navigation item.
   *
   */
  calculateBreakpoints() {

    let childrenWidth = 0
    console.log(`I am this.width: ${this.width}`)
    console.log(`I am this.navigation.offsetWidth: ${this.navigation.offsetWidth}`)
    let spaceForLogo = this.width - this.navigation.offsetWidth
    console.log(`I am spaceForLogo: ${spaceForLogo}`)
    childrenWidth += spaceForLogo

    // 3933 - this works for the first one, but makes it too wide after resizing
    // let widthDifference = this.width - this.navigation.offsetWidth
    // let childrenWidth = childrenWidth;
    // console.log(`I am navigation.children: ${this.navigation.children[0].textContent}`)
    // console.log(`I am navigationList.children: ${this.navigationList.children[0].textContent}`)
      for (let i = 0; i < this.navigationList.children.length; i++) {
        childrenWidth += this.navigationList.children[i].offsetWidth;
        this.breakpoints[i] = childrenWidth;
        console.log(`1 - Width of ${this.navigationList.children[i].textContent} is ${this.navigationList.children[i].offsetWidth}, total width now ${childrenWidth}`)
      }
      console.log(`Width of screen: ${this.width}, width of navigation: ${this.navigationList.offsetWidth}, childrenWidth: ${childrenWidth}`)
  }

  calculateBreakpointsAfterResize() {

    // 3933 - this works for the first one, but makes it too wide after resizing
    // let widthDifference = this.width - this.navigation.offsetWidth
    // let childrenWidth = widthDifference;
    let childrenWidth = 0;
    // console.log(`I am navigation.children: ${this.navigation.children[0].textContent}`)
    // console.log(`I am navigationList.children: ${this.navigationList.children[0].textContent}`)
      for (let i = 0; i < this.navigationList.children.length; i++) {
        childrenWidth += this.navigationList.children[i].offsetWidth;
        this.breakpoints[i] = childrenWidth;
        console.log(`1 - Width of ${this.navigationList.children[i].textContent} is ${this.navigationList.children[i].offsetWidth}, total width now ${childrenWidth}`)
      }
      console.log(`Width of screen: ${this.width}, width of navigation: ${this.navigationList.offsetWidth}, childrenWidth: ${childrenWidth}`)
  }

  // Add the mobile menu to the DOM
  setupMobileMenu() {
    this.mobileMenuContainer.appendChild(this.mobileMenu);
    this.mobileMenu.classList.add('nhsuk-header__drop-down', 'nhsuk-header__drop-down--hidden');
  }

  /**
   * Close the mobile menu
   *
   * Closes the mobile menu and updates accessibility state.
   *
   * Remvoes the margin-bottom from the navigation
   */
  closeMobileMenu() {
    this.menuIsOpen = false;
    this.mobileMenu.classList.add('nhsuk-header__drop-down--hidden');
    this.navigation.style.marginBottom = 0;
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'false');
    this.mobileMenuToggleButton.focus();
    this.mobileMenuCloseButton.removeEventListener('click', this.closeMobileMenu.bind(this));
    document.removeEventListener('keydown', this.handleEscapeKey.bind(this));
  }

  /**
   * Escape key handler
   *
   * This function is called when the user
   * presses the escape key to close the mobile menu.
   *
   */
  handleEscapeKey(e) {
    if (e.key === 'Escape') {
      this.closeMobileMenu();
    }
  }

  /**
   * Open the mobile menu
   *
   * Opens the mobile menu and updates accessibility state.
   *
   * The mobile menu is absolutely positioned, so it adds a margin
   * to the bottom of the navigation to prevent it from overlapping
   *
   * Adds event listeners for the close button,
   */

  openMobileMenu() {
    this.menuIsOpen = true;
    this.mobileMenu.classList.remove('nhsuk-header__drop-down--hidden');
    const marginBody = this.mobileMenu.offsetHeight;
    this.navigation.style.marginBottom = `${marginBody}px`;
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'true');

    // add event listerer for esc key to close menu
    document.addEventListener('keydown', this.handleEscapeKey.bind(this));

    // add event listener for close icon to close menu
    this.mobileMenuCloseButton.addEventListener('click', this.closeMobileMenu.bind(this));
  }

  /**
   * Handle menu button click
   *
   * Toggles the mobile menu between open and closed
   */
  toggleMobileMenu() {
    if (this.menuIsOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  /**
   * Update nav for the available space
   *
   * If the available space is less than the current breakpoint,
   * add the mobile menu toggle button and move the last
   * item in the list to the drop-down list.
   *
   * If the available space is greater than the current breakpoint,
   * remove the mobile menu toggle button and move the first item in the
   *
   * Additionaly will close the mobile menu if the window gets resized
   * and the menu is open.
   */

  updateNavigation() {
    console.log(`I am updateNavigation`)
    const availableSpace = this.navigation.offsetWidth;
    let itemsVisible = this.navigationList.children.length;
    if (availableSpace < this.breakpoints[itemsVisible - 1]) {
      console.log(`YES - I am availableSpace: ${availableSpace}, this.breakpoints[itemsVisible - 1]: ${this.breakpoints[itemsVisible - 1]}`)
      this.mobileMenuToggleButton.classList.add('nhsuk-header__menu-toggle--visible');
      this.mobileMenuContainer.classList.add('nhsuk-mobile-menu-container--visible');
      if (itemsVisible === 2) {
        return;
      }
      while (availableSpace < this.breakpoints[itemsVisible - 1]) {
        this.mobileMenu.insertBefore(
          this.navigationList.children[itemsVisible - 2],
          this.mobileMenu.firstChild,
        );
        itemsVisible -= 1;
      }
    } else if (availableSpace > this.breakpoints[itemsVisible]) {
      console.log(`NOPE - I am availableSpace: ${availableSpace}, this.breakpoints[itemsVisible]: ${this.breakpoints[itemsVisible]}`)
      while (availableSpace > this.breakpoints[itemsVisible]) {
        this.navigationList.insertBefore(
          this.mobileMenu.removeChild(this.mobileMenu.firstChild),
          this.mobileMenuContainer,
        );
        itemsVisible += 1;
      }
    }
    if (!this.mobileMenu.children.length) {
      console.log(`!this.mobileMenu.children.length`)
      this.mobileMenuToggleButton.classList.remove('nhsuk-header__menu-toggle--visible');
      this.mobileMenuContainer.classList.remove('nhsuk-mobile-menu-container--visible');
    }

    if (document.body.offsetWidth !== this.width && this.menuIsOpen) {
      this.closeMobileMenu();
    }

  }

  /**
   * Orientation change
   *
   * Check the orientation of the device, if changed it will trigger a
   * update to the breakpoints and navigation.
   */
  doOnOrientationChange() {
    switch (window.orientation) {
      case 90:
        setTimeout(() => {
          this.calculateBreakpoints();
          this.updateNavigation();
        }, 200);
        break;
      default:
        break;
    }
}
}

export default () => {
  new Header().init();
};
