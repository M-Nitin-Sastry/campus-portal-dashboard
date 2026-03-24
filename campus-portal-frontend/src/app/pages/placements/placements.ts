import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlacementsService } from '../../services/placements.service';

@Component({
  selector: 'app-placements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './placements.html',
  styleUrls: ['./placements.css']
})
export class Placements implements OnInit {

  placements: any[] = [];
  showModal = false;

  data = {
    company: "",
    package: "",
    studentsPlaced: 0,
    status: "Completed"
  };

  constructor(private placementsService: PlacementsService) {}

  ngOnInit() {
    this.loadPlacements();
  }

  loadPlacements() {
    this.placementsService.getPlacements().subscribe((res: any[]) => {
      this.placements = res;
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addPlacement() {
    this.placementsService.addPlacement(this.data).subscribe(
      () => {
        alert("Placement added successfully!");
        this.closeModal();
        this.loadPlacements();
      },
      () => alert("Failed to add placement")
    );
  }

  deletePlacement(id: string) {
    if (!confirm("Are you sure to delete?")) return;

    this.placementsService.deletePlacement(id).subscribe(
      () => {
        alert("Placement deleted!");
        this.loadPlacements();
      },
      () => alert("Failed to delete placement")
    );
  }
}
