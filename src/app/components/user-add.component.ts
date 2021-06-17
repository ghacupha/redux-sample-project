import {Component, Input, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {State} from "../state/user.reducer";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../users/users.model";
import {userHasBeenCreated} from "../state/user.actions";
import {selectUserForUpdate} from "../state/user.selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: 'user-add.template.html'
})
export class UserAddComponent implements OnInit{

  updateUser?: User;

  editForm: FormGroup = this.fb.group({
    id: [''],
    name: [''],
    email: [''],
    purpose: [''],
    programme: [''],
  });

  isSaving: boolean = false;

  constructor(private state: Store<State>, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.state.pipe(select(selectUserForUpdate)).subscribe(user => this.updateForm(user))
  }

  save(){
    this.isSaving = true;
    const user = this.createFromForm();
    this.state.dispatch(userHasBeenCreated({user}))
    this.isSaving = false;
  }

  private createFromForm(): User {
    return {
      ...new User(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      email: this.editForm.get(['email'])!.value,
      purpose: this.editForm.get(['purpose'])!.value,
      programme: this.editForm.get(['programme'])!.value,
    };
  }

  private updateForm(user?: User): void {
    this.editForm.patchValue({
      id: user?.id,
      name: user?.name,
      email: user?.email,
      purpose: user?.purpose,
      programme: user?.programme,
    });
  }

  gotoUsers() {
    this.router.navigate(['users'])
  }
}
