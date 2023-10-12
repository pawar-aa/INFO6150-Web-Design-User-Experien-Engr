**INFO6150 Assignment 5: Detailed Overview**
Name: Aashay Pawar
NUID: 002134382

For the development of various components, we partitioned our styling into several Sass files. To consolidate these styles and ensure uniform application, we imported all individual Sass files into a centralized `style.scss` file.

We incorporated the use of Sass variables to maintain a consistent color scheme throughout the website. This ensures ease of future updates and a consistent visual appeal.

In the `_hero.scss` file, we utilized custom properties to define the dimensions (both height and width) of the bubbles. This method offers a clear distinction and readability for component-specific styles.

A prominent feature in our styling approach is the use of nesting. By employing nesting in the SCSS files, we achieved a structured and hierarchical styling for each distinct component. This hierarchical approach ensures clarity and reduces redundancy.

For positioning the bubbles in the hero section, we applied interpolation techniques. This approach provides dynamic positioning based on specified conditions, resulting in a more interactive and engaging hero section.

To promote code reusability and maintainability, we made use of the placeholder selector. Specifically, it was employed to assign common flexbox properties, such as `align-center`, to various components. 

With the aim to avoid repetitive code and ensure consistent application of common properties, mixins were deployed. They act as reusable style blocks, making our SCSS more modular.

Furthermore, we introduced a function specifically for the bubbles in the hero section. This function accepts position as a property (prop) and dynamically sets the position of these bubbles, providing flexibility in design adjustments.

Lastly, to ensure that our website offers an optimal user experience across various devices and screen sizes, we integrated media queries. This allows our website to adapt and respond to different viewport sizes, making it fully responsive.