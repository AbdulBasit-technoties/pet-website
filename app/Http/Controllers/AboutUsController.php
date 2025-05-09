<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Faq;

class AboutUsController extends Controller
{
    public function index() {        
        $faqs = Faq::latest()->get();
        return Inertia::render('Frontend/AboutUs',compact('faqs'));
    }
}
