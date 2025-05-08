
<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\RoleController;
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
    return Inertia::render('Frontend/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::middleware(['auth'])->prefix('dashboard')->group(function () {
    Route::resource('roles', RoleController::class);
    Route::resource('services', ServicesController::class);
    Route::post('services-image', [ServicesController::class, "ServiceImage"])->name('services.image');
    Route::resource('testimonials', TestimonialController::class);
    Route::post('testimonials-image', [TestimonialController::class, "TestimonialImage"])->name('testimonials.image');
    Route::resource('countries', CountryController::class);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('our-services', [ServicesController::class, "FrontIndex"])->name('services.front');
Route::get('testimonials', [TestimonialController::class, "FrontIndex"])->name('testimonials.front');
Route::resource('about-us', AboutUsController::class);
Route::resource('contact-us', ContactUsController::class);
Route::resource('galleries', GalleryController::class);
Route::resource('bookings', BookingController::class);


require __DIR__.'/auth.php';
