<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGalleryRequest;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;
class GalleryController extends Controller
{
    public function FrontIndex(){
        $gallery = Gallery::latest()->get();
        return Inertia::render('Frontend/Gallery', compact('gallery'));
    }
    public function Index(Request $request) {
        if (!auth()->user()->can('galleries.index')) {
            abort(401);
        }
        $galleries = Gallery::paginate(30);
        $editData = $request->id ? Gallery::find($request->id) : null;
        $isEditMode = (bool)$request->id;
        return Inertia::render('Gallery/Index', compact('galleries','editData','isEditMode'));
    }

    public function Store(StoreGalleryRequest $request){
        if (!auth()->user()->can('galleries.store')) {
            abort(401);
        }
        $data = $request->all();
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('Gallery', 'public');
            $data['image'] = $path;
        }
        Gallery::create($data);
        return redirect()->route('galleries.index')->with([
            'message' => 'Gallery created successfully!'
        ]);

    }

    public function update(StoreGalleryRequest $request, Gallery $gallery)
    {
        if (!auth()->user()->can('galleries.update')) {
            abort(403); 
        }

        $gallery->update($request->all()); 

        return redirect()->route('galleries.index')->with([
            'message' => 'Gallery updated successfully!'
        ]);
    }


    public function destroy(Gallery $gallery)
    {
        if (!auth()->user()->can('galleries.destroy')) {
            abort(401);
        }

        $gallery->delete();

        return redirect()->route('galleries.index')->with([
            'message' => 'Gallery deleted successfully!'
        ]);
    }

    public function GalleryImage(Request $request) {
        $gallery = Gallery::find($request->id);
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('Gallery', 'public');
            $gallery->update(['image' => $path]);
        }
    
        return redirect()->back()->with('success', 'Image updated successfully!');
    }

}
