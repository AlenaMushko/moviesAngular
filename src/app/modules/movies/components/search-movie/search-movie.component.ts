import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-search-movie',
    templateUrl: './search-movie.component.html',
    styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent {
    @Output() searchEvent = new EventEmitter<string>();
    searchForm: FormGroup;

    constructor() {
        this.searchForm = new FormGroup({
            searchMovieValue: new FormControl('')
        })
    }

    handleSearch() {
        const searchValue = this.searchForm.get('searchMovieValue')?.value.trim();
        if (searchValue) {
            this.searchEvent.emit(searchValue);
        }
    }

    resetSearch() {
        this.searchForm.get('searchMovieValue')?.setValue('');
        this.searchEvent.emit('');
    }

}
