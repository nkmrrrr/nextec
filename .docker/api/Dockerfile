FROM php:8.1-fpm-alpine
# ↑ alpine で作られたベースイメージは他と比べて何が違うのか？

# alpine では 下記のように記述してもタイムゾーンは UTC のままらしい
# JST にするためには apk add で tzdata をインストールする必要がある。
# だが一旦このままにしておく。
ENV TZ Asia/Tokyo
ENV COMPOSER_ALLOW_SUPERUSER 1

# install Library
# ベースイメージのOSがalpineの場合は xdebug を使うために autoconf gcc g++ make が必要
RUN apk update && \
    apk add --no-cache --virtual \
		.php-builds \
		oniguruma-dev \
		git \
		zip \
		unzip \
		vim \
		linux-headers \
		autoconf gcc g++ make

# add php-extention-module & xdebug
RUN docker-php-ext-install mbstring pdo_mysql bcmath && \
    docker-php-ext-enable mbstring && \
		pecl install xdebug && \
    docker-php-ext-enable xdebug

# config file COPY
COPY conf/php.ini /usr/local/etc/php/php.ini
COPY conf/docker.conf /usr/local/etc/php-fpm.d/docker.conf

# install Composer
COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
# ENTRYPOINT ["docker-entrypoint.sh"]
ENTRYPOINT ["/entrypoint.sh"]

WORKDIR /app

CMD ["/bin/ash"]