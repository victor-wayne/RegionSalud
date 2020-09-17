<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Medico;
use App\Area;
use App\Calificacion;

class PeriodoncistasController extends Controller
{
    public function index()
    {
        $medicos = Medico::All()
            ->where('area_id', '=', 34);
        //dd($medicos);

        $areas = Area::All()
            -> where('id', '=', 30);

        return view('periodoncistas.index', compact('medicos', 'areas'));
    }
}
