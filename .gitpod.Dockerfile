FROM gitpod/workspace-full-vnc

USER root

# To run browser tests
ENV DISPLAY :99.0
ENV DISPLAY_NUM 99
ENV SCREEN_WIDTH 1360
ENV SCREEN_HEIGHT 1020
ENV SCREEN_DEPTH 24
ENV SCREEN_DPI 96
ENV VNC_PORT 5900
ENV NO_VNC_PORT 7900
