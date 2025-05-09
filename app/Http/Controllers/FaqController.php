<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Http\Requests\StoreFaqRequest;
use App\Http\Requests\UpdateFaqRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function FrontIndex(){
        return Inertia::render('Frontend/Faq');
    }
    public function Index(Request $request)
    {
        if (!auth()->user()->can('faqs.index')) {
            abort(401);
        }
        $faqs = Faq::paginate(30);
        $editData = $request->id ? Faq::find($request->id) : null;
        $isEditMode = (bool)$request->id;
        return Inertia::render('Faq/Index', compact('faqs','editData','isEditMode'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreFaqRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFaqRequest $request)
    {
        if (!auth()->user()->can('faqs.store')) {
            abort(401);
        }
        $data = $request->all();
        Faq::create($data);
        return redirect()->route('faqs.index')->with([
            'message' => 'Faq created successfully!'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function show(Faq $faq)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function edit(Faq $faq)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFaqRequest  $request
     * @param  \App\Models\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFaqRequest $request, Faq $faq)
    {
        if (!auth()->user()->can('faqs.update')) {
            abort(401); 
        }   
        $faq->update($request->all());
        return redirect()->route('faqs.index')->with([
           'message' => 'Faq updated successfully!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function destroy(Faq $faq)
    {
        if (!auth()->user()->can('faqs.destroy')) {
            abort(401);
        }
        $faq->delete();
        return redirect()->route('faqs.index')->with([
            'message' => 'Faq deleted successfully!'
        ]);
    }
}
