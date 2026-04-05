<p align="center"><a href="#"><img src="public/assets/images/logo/logo-ketupart_studio.png" width="200"></a></p>

<!-- <p align="center">
<a href="https://gitlab.com/ImranShamm/hse-magicx/-/pipelines"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
</p>

<p align="center">
Link: <a href="https://vertigo.zulzayn.com" target="_blank">vertigo.zulzayn.com</a>
</p> -->

## REQUIREMENT
This installation is intended to be used with laragon that comes with preinstall tools needed for the project for local development environment. For other ways the requirement is still the same but you need to configure them yourself.

Just make sure that your Laragon run with below Environment
- Composer 2
- PHP = ^8.1
- MySQL 5.7
- Apache/Nginx 
- Node 16++
- NPM 8++

## INSTALLATION STEPS

**1) Clone**
- SSH : `git@gitlab.com:ketupart-studio/ketupart-studio.git`
- HTTPS : `https://gitlab.com/ketupart-studio/ketupart-studio.git`

**2) run - `composer install`**

**3) Copy .env.example file and rename to .env** 
- change `APP_ENV=production`

**4) run - `php artisan key:generate`**

**5) run - `php artisan storage:link`**

**6) Create database - dev_ketupart_studio**

**7) Migrate database - php artisan migrate**

**7) run - `npm install`**

**8) run - `npm run build`**

**9) : If Linux Server)** Set Permission - `sudo chown -R root:www-data /var/www/html/ketupart-studio/ && sudo find /var/www/html/ketupart-studio/ -type f -exec chmod 664 {} \; && sudo find /var/www/html/ketupart-studio/ -type d -exec chmod 775 {} \;`


