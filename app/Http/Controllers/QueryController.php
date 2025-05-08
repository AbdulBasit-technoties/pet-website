<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQueryRequest;
use App\Http\Requests\UpdateQueryRequest;
use App\Models\Query;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QueryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!auth()->user()->can('queries.update')) {
            abort(401);
        }
        $queries = Query::paginate(30);
        $editData = $request->id ? Query::find($request->id) : null;
        $isEditMode = (bool)$request->id;
        return Inertia::render('Queries/Index', compact('queries', 'editData', 'isEditMode'));
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreQueryRequest $request)
    {
        if (!auth()->user()->can('queries.store')) {
            abort(401);
        }
        Query::create($request->validated());
        return redirect()->route('queries.index')->with([
            'message' => 'Query created successfully!'
        ]);
    }
    public function FrontStore(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email'=> 'required|string|max:255',
            'phone'=> 'required|string|max:255',
            'message'=> 'required|string',
        ]);
        Query::create($validate);
        return redirect()->back()->with('message', 'Message Send successfully');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Query $query)
    {
        return back();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Query $query)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateQueryRequest $request, Query $query)
    {
        if (!auth()->user()->can('queries.update')) {
            abort(401);
        }
        $query->update($request->validated());
        return redirect()->route('queries.index')->with([
            'message' => 'Query updated successfully!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Query $query)
    {
        if (!auth()->user()->can('queries.delete')) {
            abort(401);
        }
        $query->delete();
        return redirect()->route('queries.index')->with([
           'message' => 'Query deleted successfully!'
        ]);
    }
}
