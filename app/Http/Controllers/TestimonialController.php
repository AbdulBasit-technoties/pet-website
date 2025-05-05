<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class TestimonialController extends Controller
{
    public function index() {
        return Inertia::render('Frontend/Testimonials');
    }
}
