#####################################
# doirisks/dori
# by Ted M
#
#####################################

FROM linode/lamp
MAINTAINER "DOI RISKS"

ADD . /src
RUN DEBIAN_FRONTEND=noninteractive apt-get bash /src/setup/dockersetup.sh

