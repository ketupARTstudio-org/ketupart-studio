<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//About
Route::get('/aboutus', function () {
    return Inertia::render('AboutUs/Index', []);
});
Route::get('/ouroffice', function () {
    return Inertia::render('OurOffice/Index', []);
});
Route::get('/team', function () {
    return Inertia::render('Team/Index', []);
});
Route::get('/ourclient', function () {
    return Inertia::render('OurClient/Index', []);
});
Route::get('/accreditation', function () {
    return Inertia::render('Accreditation/Index', []);
});
Route::get('/testimonial', function () {
    return Inertia::render('Testimonial/Index', []);
});

//Services
Route::get('/arvr', function () {
    return Inertia::render('ArVr/Index', []);
});
Route::get('/gamedevelopment', function () {
    return Inertia::render('GameDevelopment/Index', []);
});
Route::get('/mobiledevelopment', function () {
    return Inertia::render('MobileDevelopment/Index', []);
});
Route::get('/webdevelopment', function () {
    return Inertia::render('WebDevelopment/Index', []);
});
Route::get('/machinelearning', function () {
    return Inertia::render('MachineLearning/Index', []);
});
Route::get('/computervision', function () {
    return Inertia::render('ComputerVision/Index', []);
});
Route::get('/blockchain', function () {
    return Inertia::render('Blockchain/Index', []);
});

//Portfolio
Route::get('/casestudy', function () {
    return Inertia::render('Blockchain/Index', []);
});
Route::get('/project', function () {
    return Inertia::render('Blockchain/Index', []);
});
Route::get('/publication', function () {
    return Inertia::render('Blockchain/Index', []);
});

//Blog
Route::get('/blog', function () {
    return Inertia::render('Blog/Index', []);
});

//Contact
Route::get('/contact', function () {
    return Inertia::render('Contact/Index', []);
});

Route::middleware(['auth:sanctum',config('jetstream.auth_session'),'verified',])->group(function () {
    Route::get('/dashboard', function () { 
        return Inertia::render('Dashboard/Index');
    })->name('dashboard');
});
