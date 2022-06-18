FROM nginx:alpine

## Remove default nginx index page
#RUN rm -rf /usr/share/nginx/html/*

RUN ["apk", "add", "nano"]

# Copy from the stahg
#COPY --from=builder /react-ui/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
