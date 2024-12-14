<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Jetstream\Jetstream;
use Illuminate\Support\Str;

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
Route::get('/consultancy', function () {
    return Inertia::render('Consultancy/Index', []);
});
Route::get('/immersive', function () {
    return Inertia::render('Immersive/Index', []);
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
Route::get('/blockchain', function () {
    return Inertia::render('Blockchain/Index', []);
});
Route::get('/cloudcomputing', function () {
    return Inertia::render('CloudComputing/Index', []);
});
Route::get('/microservice', function () {
    return Inertia::render('Microservice/Index', []);
});

//Portfolio
Route::get('/methodology', function () {
    return Inertia::render('Methodology/Index', []);
});
Route::get('/casestudy', function () {
    return Inertia::render('CaseStudy/Index', []);
});
Route::get('/casestudy/1', function () {
    return Inertia::render('CaseStudy/Show', []);
});
Route::get('/project', function () {
    return Inertia::render('Project/Index', []);
});
Route::get('/publication', function () {
    return Inertia::render('Publication/Index', []);
});

//Products
Route::get('/gofly', function () {
    return Inertia::render('GoFly/Index', []);
});

//Blog
Route::get('/blog', function () {
    return Inertia::render('Blog/Index', []);
});

//Contact
Route::get('/contact', function () {
    return Inertia::render('Contact/Index', []);
});

//Dashboard
Route::middleware(['auth:sanctum',config('jetstream.auth_session'),'verified',])->group(function () {
    Route::get('/dashboard', function () { 
        return Inertia::render('Dashboard/Index');
    })->name('dashboard');
});

//Terms and Privacy Policy
Route::get('/terms-of-service', function () {
    $termFile = Jetstream::localizedMarkdownPath('terms.md');
    return view('policy', [
        'policy' => Str::markdown(file_get_contents($termFile)),
    ]);
});

Route::get('/privacy-policy', function () {
    $policyFile = Jetstream::localizedMarkdownPath('policy.md');
    return view('policy', [
        'policy' => Str::markdown(file_get_contents($policyFile)),
    ]);
});

Route::get('/gofly/privacy-policy', function () {
    $policyFile = Jetstream::localizedMarkdownPath('policy_gofly.md');
    return view('policy', [
        'policy' => Str::markdown(file_get_contents($policyFile)),
    ]);
});


