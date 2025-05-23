
<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\QueryController;
use App\Http\Controllers\RoleController;
use App\Models\Services;
use App\Models\Testimonial;
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
        'services' => Services::latest()->take(5)->get(),
        'testimonials' => Testimonial::with('country')->latest()->take(5)->get(),
    ]);
})->name('home');

Route::middleware(['auth'])->prefix('dashboard')->group(function () {
    Route::resource('roles', RoleController::class);
    Route::resource('services', ServicesController::class);
    Route::post('services-image', [ServicesController::class, "ServiceImage"])->name('services.image');
    Route::resource('testimonials', TestimonialController::class);
    Route::resource('galleries', GalleryController::class);
    Route::resource('faqs', FaqController::class);
    
    Route::resource('queries', QueryController::class);
    Route::post('testimonials-image', [TestimonialController::class, "TestimonialImage"])->name('testimonials.image');
    Route::post('galleries-image', [GalleryController::class, "GalleryImage"])->name('galleries.image');
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
Route::get('galleries', [GalleryController::class, "FrontIndex"])->name('galleries.front');

Route::post('queries', [QueryController::class, "FrontStore"])->name('queries.add');

Route::resource('about-us', AboutUsController::class);
Route::resource('contact-us', ContactUsController::class);
Route::resource('bookings', BookingController::class);


require __DIR__.'/auth.php';
