<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTestimonialsRequest;
use App\Http\Requests\UpdateTestimonialsRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Testimonial;
use App\Models\Country;
class TestimonialController extends Controller
{
    public function FrontIndex() {
        $testimonials = Testimonial::with('country')->latest()->take(5)->get();
        return Inertia::render('Frontend/Testimonials',[
            'testimonials' => $testimonials,
        ]);
    }
    public function Index(Request $request) {
        if (!auth()->user()->can('testimonials.index')) {
            abort(401);
        }
        $testimonials = Testimonial::with('country')->paginate(30);
        $ratings = [
            ["label" => "One", "value" => "1"],
            ["label" => "Two", "value" => "2"],
            ["label" => "Three", "value" => "3"],
            ["label" => "Four", "value" => "4"],
            ["label" => "Five", "value" => "5"],
        ];
        $countries = Country::get()->map(function ($country) {
            return [
                'label' => $country->name,
                'value' => $country->id,
            ];
        })->toArray();
        $editData = $request->id ? Testimonial::find($request->id) : null;
        $isEditMode = (bool)$request->id;
        return Inertia::render('Testimonials/Index', compact('testimonials','editData','isEditMode','countries', 'ratings'));
    }

    public function Store(StoreTestimonialsRequest $request){
        if (!auth()->user()->can('testimonials.store')) {
            abort(401);
        }
        $data = $request->all();
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('Testimonials', 'public');
            $data['image'] = $path;
        }
        Testimonial::create($data);
        return redirect()->route('testimonials.index')->with([
            'message' => 'Testimonial created successfully!'
        ]);

    }
    public function Update(UpdateTestimonialsRequest $request, Testimonial $testimonial) {
        if (!auth()->user()->can('testimonials.update')) {
            abort(401); 
        }   
        $testimonial->update($request->all());
        return redirect()->route('testimonials.index')->with([
           'message' => 'Testimonial updated successfully!'
        ]);
    }

    public function destroy(Testimonial $testimonial)
    {
        if (!auth()->user()->can('testimonials.destroy')) {
            abort(401);
        }
        $testimonial->delete();
        return redirect()->route('testimonials.index')->with([
            'message' => 'Testimonial deleted successfully!'
        ]);
    }
    public function TestimonialImage(Request $request) {
        $testimonial = Testimonial::find($request->id);
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('Testimonial', 'public');
            $testimonial->update(['image' => $path]);
        }
    
        return redirect()->back()->with('success', 'Image updated successfully!');
    }
}
