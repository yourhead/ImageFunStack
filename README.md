
# Image Fun Stack
This stack demonstrates some of the new featuers of the Stacks 3 API. It uses the new an *addType* and *inline* mechanisms to give the user an easy a flexible way to add many images to a stack.  Note that this stack contains a sub-stack as well.  Both stacks are delivered as a single unit.  The sub-stack is hidden (unless the user has chosen to display hidden stacks).

### Add Types
Add types are a new way to allow the user to add specific stacks to a container.  To use add types you specify the ID of the stacks that you would like to be added when the + button is pushed.

### Allowed Types
Allowed types are a new way to limit which stacsk are allowed into a container.  To use allowed types you specify the the ID of the stacks that should be allowed into the container.

Example: `%slice -addTypes="com.yourhead.stacks.listItem,text"%`

When the addTypes switch is used the normal Drop Stacks Here area is not displayed. Instead a `+` button is shown instead.  Clicking the button will add a stack of the type specified.  Once added the stack behaves like any other and can be dragged, configured, or deleted by the user.

*add-types and allowed-types are a replacement for the poorly performing `repeat` mechanism of Stacks 2.*


### Inline
The item stack contains the plist key "inline" and is set to YES.  Inline stacks are exported without any wrapper divs.  The dramatically reduces the overhead of a stack and allows it to become a more integral part of the parent stacks it's placed within.  However, there is a tradeoff. The stack will not be guarded against flowing into other stacks. Nor will it have the normal stacks_in div id that %id% relies upon. So some extra care must be taken when using this type of stack.

### Child-Of
Some stacks are designed to be used only when they are contained inside of other specific stacks.  In this demo we restrict the item stack to only ever be a child of the parent stack.  The child stack can be dragged to be reordered within it's container -- but cannot be dragged out.  To use this we specify the `childOf` key in the item plist. It's an Array of Strings. Each string is the id of a stack that the child is allowed inside of.  When no `childOf` key is specified the stack behaves like normal and can be placed into any container.

### Hidden vs. Deprecated
Stacks 2.5 allowed stacks to be hidden from the default display in the library.  This is a nice way to allow you to deliver some stacks to the user that they only need in conjunction with others.  It also became a very nice way to migrate users to new functionality -- hiding the old version inside of a new version.
Stacks 3 allows users to display hidden items since there are times when it may be useful for Add-Types.  To keep things hidden, even when hidden items are being displayed, you can now use the "deprecated" key instead.

### Libraries
Stacks 3 a new library format the `javascriptLib` and `javascriptClosure` `cssLib` etc Now all libraries are added using a single common mechanism.  You specify the `libraries` key.  It's an array of Dictionaries with the following keys:

 * `name`: the name of the library. Currently `jQuery`, `MooTools`, and `Font Awesome` are supported.
 * `closure`: whether to use the closure mechanism with this library (jQuery only). Note: defaults to YES.
 * `minVersion`: the minimum version required by this stack
 * `maxVersion`: the maximum version required by this stack

***Do not specify a min or max version unless you absolutely must.  Please attempt to support the broadest possible range of library versions.  Limiting versions will limit how your users can use your stack and will increase your support load***

### Tags
Tags are used by the stacks library to let the users group, sort, and search for your stacks.  You should include no more than 5 tags. The tags key is an Array of Strings. They should be simple and as terse as possible.  The first tag is special, when the user chooses to group their library items, the first tag will be used as the group label (much like Stacks 2).
*This feature supersedes the `group` tag.  If the tags array is present, the `group` key is ignored. If no `tags` key is present then the group will be treated as the only tag.*
