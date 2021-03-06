var Menu = function(){};


/**
 * Adds an item to the menu. The label for a menu item should be in sentence case (only the first
 word capitalized).
 *
 * @param {String} caption - the label for the menu item, with only the first word capitalized
 * @param {String} functionName - the name of the function to invoke when the user selects the item
 *
 * @return {Menu} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/menu.html'>Menu</a></code>, for chaining
 */
Menu.prototype.addItem = function(caption, functionName){};

/**
 * Adds a visual separator to the menu.
 *
 * @return {Menu} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/menu.html'>Menu</a></code>, for chaining
 */
Menu.prototype.addSeparator = function(){};

/**
 * Adds a sub-menu to the menu.
 *
 * @param {Menu} menu - the sub-menu, constructed like a top-level menu
 *
 * @return {Menu} this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/base/menu.html'>Menu</a></code>, for chaining
 */
Menu.prototype.addSubMenu = function(menu){};

/**
 * Inserts the menu into the instance of the editor's user interface.
 *
 * @return void
 */
Menu.prototype.addToUi = function(){};

