@extends('layouts.guest')

@section('content')
    <div class="row justify-content-center pt-4">
        <div class="col-12 col-lg-6">
            <div>
                <x-jet-authentication-card-logo />
            </div>

            <div class="card shadow-sm">
                <div class="card-body">
                    {!! $policy !!}
                </div>
            </div>
        </div>
    </div>
@endsection

