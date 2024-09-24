# Use a lightweight web server image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JS files into the container
COPY index.html .
COPY style.css .
COPY app.js .

# Expose the default port for nginx
EXPOSE 80
